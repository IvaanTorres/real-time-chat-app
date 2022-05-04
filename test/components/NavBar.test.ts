import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import NavBar from '~/components/NavBar.vue'
import { messages } from '~/modules/i18n'

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
    },
  }

  beforeEach(() => {
    wrapper = mount(NavBar, global)
  })
  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(NavBar).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })
})
