import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import NavBar from '~/components/NavBar.vue'
import { messages } from '~/modules/i18n'

// Define the router
const router = {
  push: () => {},
  currentRoute: {
    value: {
      meta: {
        layout: '',
      },
    },
  },
}
// Mock the router by importing the router from the vue-router module
vi.mock('vue-router', () => ({
  useRouter: () => router,
}))

beforeAll(() => {
  // Remove the warning messages
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<NavBar />', () => {
  let wrapper: VueWrapper
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  const global = {
    global: {
      plugins: [i18n],
      mocks: {
        $router: router,
      },
    },
  }

  beforeEach(() => {
    wrapper = mount(NavBar, global)
  })
  afterEach(() => {
    wrapper.unmount()
    vi.resetAllMocks()
  })

  test('should mount', () => {
    // Setup
    router.currentRoute.value.meta.layout = 'auth'
    // Mount the component
    wrapper = mount(NavBar, global)
    // The component should exists
    expect(NavBar).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should mount the locale select in the auth layout', async() => {
    // Setup
    router.currentRoute.value.meta.layout = 'auth'
    // Mount the component
    wrapper = mount(NavBar, global)

    expect(wrapper.find('[role="select"]').exists()).toBe(true)
  })

  test('should not mount the locale select in other layouts', async() => {
    // Setup
    router.currentRoute.value.meta.layout = 'dashboard'
    // Mount the component
    wrapper = mount(NavBar, global)

    // The component should not exists
    expect(wrapper.find('[role="select"]').exists()).not.toBe(true)
  })
})
