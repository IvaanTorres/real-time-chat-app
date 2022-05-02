import type { TestingPinia } from '@pinia/testing'
import { createTestingPinia } from '@pinia/testing'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FormDashboard from './FormDashboard.vue'

// Define the pinia instance
let pinia: TestingPinia

beforeAll(() => {
  // Remove the warning messages
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  // Create pinia instance
  pinia = createTestingPinia({
    initialState: {
      user: { name: 'John Doe' },
    },
  })
})

describe('<FormDashboard />', () => {
  // Define the wrapper/component
  let wrapper: VueWrapper
  // Define the global wrapper options
  const global = {
    attachTo: document.body,
    plugins: [pinia],
  }

  beforeEach(async() => {
    wrapper = await mount(FormDashboard, global)
    vi.resetAllMocks()
  })

  afterEach(() => { wrapper.unmount() })

  test('should mount', () => {
    // The component should exists
    expect(FormDashboard).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should be autofocused the input', async() => {
    const input = await wrapper.find('[role="message-input"]').element
    // The input should be focused
    expect(input).toBe(document.activeElement)
  })
})
