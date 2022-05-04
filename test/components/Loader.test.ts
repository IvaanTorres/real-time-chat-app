import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import { createI18n } from 'vue-i18n'
import Loader from '~/components/Loader.vue'
import { messages } from '~/modules/i18n'

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<Loader />', () => {
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

  beforeEach(() => { wrapper = mount(Loader, global) })
  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(Loader).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the loading message', () => {
    expect(wrapper.find('[role="loader"]').text()).toBe('Loading messages...')
  })
})
