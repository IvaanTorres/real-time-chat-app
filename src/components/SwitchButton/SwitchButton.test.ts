import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import SwitchButton from './SwitchButton.vue'

describe('<SwitchButton />', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(SwitchButton)
  })
  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(SwitchButton).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should switch to dark mode', async() => {
    const switchButton = wrapper.find('[role="switch-button"]')

    expect(wrapper.find('[role="light-mode-icon"]').exists()).toBe(true)
    // TODO: find a way to test the html tag light mode class
    await switchButton.trigger('click')
    expect(wrapper.find('[role="dark-mode-icon"]').exists()).toBe(true)
    // TODO: find a way to test the html tag dark mode class
  })
})
