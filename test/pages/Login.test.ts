import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import type { TestingPinia } from '@pinia/testing'
import { createTestingPinia } from '@pinia/testing'
import { createI18n } from 'vue-i18n'
import Login from '~/pages/auth/login/index.vue'
import { useUserStore } from '~/stores/user'
import { messages } from '~/modules/i18n'
import { routes } from '~/enums'
import { user } from '~/__mocks__/user'

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
      user: { name: user.username },
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

    const userStore = useUserStore()
    userStore.name = user.username

    const input = await wrapper.find('input')
    await input.setValue(user.username)
    expect(input.element.value).toBe(user.username)

    const button = await wrapper.find('button')
    await button.trigger('click')

    // * OPTION 1 - We check that a string is defined in the desired route
    // expect('Logout').toBeDefined()

    // * OPTION 2 - Use a mocked router
    expect(pushAction).toHaveBeenCalledWith(routes.DASHBOARD)
    expect(pushAction).toHaveBeenCalledTimes(1)

    // * OPTION 3 - Use the real router by importing the one that the app is using
  })
})
