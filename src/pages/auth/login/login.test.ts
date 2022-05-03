import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import type { TestingPinia } from '@pinia/testing'
import { createTestingPinia } from '@pinia/testing'
import { createI18n } from 'vue-i18n'
import Login from './index.vue'
import { useUserStore } from '~/stores/user'
import { messages } from '~/modules/i18n'

// Define the pinia instance
let pinia: TestingPinia
// Define the router
const router = { push: () => {} }
// Mock the router by importing the router from the vue-router module
vi.mock('vue-router', () => ({
  useRouter: () => router,
}))

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
  // Create pinia instance
  pinia = createTestingPinia({
    initialState: {
      user: { name: 'John Doe' },
    },
  })
})

describe('<Login />', () => {
  // Define the wrapper/component
  let wrapper: VueWrapper
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  // Define the global wrapper options
  const global = {
    plugins: [pinia, i18n],
    mocks: {
      $router: router,
    },
  }

  beforeEach(() => {
    wrapper = mount(Login, { global })
    vi.resetAllMocks()
  })

  afterEach(() => { wrapper.unmount() })

  test('should mount', () => {
    // The component should exists
    expect(Login).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should login', async() => {
    // Spy on the push method of the router
    const pushAction = vi.spyOn(router, 'push')

    const user = useUserStore()
    user.name = 'John Doe'

    const input = await wrapper.find('input')
    await input.setValue('John Doe')
    expect(input.element.value).toBe('John Doe')

    const button = await wrapper.find('button')
    await button.trigger('click')

    // * OPTION 1 - We check that a string is defined in the desired route
    // expect('Logout').toBeDefined()

    // * OPTION 2 - Use a mocked router
    expect(pushAction).toHaveBeenCalledWith('/dashboard')
    expect(pushAction).toHaveBeenCalledTimes(1)

    // * OPTION 3 - Use the real router by importing the one that the app is using
  })
})
