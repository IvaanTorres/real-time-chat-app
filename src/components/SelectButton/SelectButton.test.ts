import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import SelectButton from './SelectButton.vue'
import { messages } from '~/modules/i18n'

describe('<SelectButton />', () => {
  let wrapper: VueWrapper
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  const global = {
    global: {
      plugins: [i18n],
    },
  }

  beforeEach(() => { wrapper = mount(SelectButton, global) })
  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(SelectButton).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should toggle the dropdown when clicking the select', async() => {
    const selectButton = wrapper.find('[role="select-button"]')

    expect(wrapper.find('[role="dropdown"]').exists()).toBe(false)
    await selectButton.trigger('click')
    expect(wrapper.find('[role="dropdown"]').exists()).toBe(true)
    await selectButton.trigger('click')
    expect(wrapper.find('[role="dropdown"]').exists()).toBe(false)
  })

  test('should show the dropdown when the mouse is on the select', async() => {
    const select = wrapper.find('[role="select"]')

    expect(wrapper.find('[role="dropdown"]').exists()).toBe(false)
    await select.trigger('mouseenter')
    expect(wrapper.find('[role="dropdown"]').exists()).toBe(true)
    await select.trigger('mouseleave')
    expect(wrapper.find('[role="dropdown"]').exists()).toBe(false)
  })

  test('should change the locale', async() => {
    // Check the default locale
    expect(wrapper.find('[role="select-title"]').text()).toBe('Select language')
    // Show/Open the dropdown
    await wrapper.find('[role="select-button"]').trigger('click')
    // Click on the Spanish option [2]
    await wrapper.findAll('[role="dropdown-item"]')[2].trigger('click')
    // Check the new locale
    expect(wrapper.find('[role="select-title"]').text()).toBe('Selecciona un idioma')
  })
})
