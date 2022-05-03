import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { spyOn } from 'vitest'
import { createI18n } from 'vue-i18n'
import BoardUsers from './BoardUsers.vue'
import { messages } from '~/modules/i18n'

beforeAll(() => {
  // Create pinia instance
  setActivePinia(createPinia())
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<BoardUsers />', () => {
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

  beforeEach(() => { wrapper = mount(BoardUsers, global) })
  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(BoardUsers).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })
})
