import type { TestingPinia } from '@pinia/testing'
import { createTestingPinia } from '@pinia/testing'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import Chat from '~/components/Chat.vue'
import { useUserStore } from '~/stores/user'
import { messages } from '~/modules/i18n'

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

describe('<Chat />', () => {
  let wrapper: VueWrapper
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  const global = {
    plugins: [pinia, i18n],
  }

  beforeEach(() => {
    wrapper = mount(Chat, { global })
  })

  afterEach(() => {
    wrapper.unmount()
    vi.resetAllMocks()
  })

  test('should show the loading message', () => {
    const user = useUserStore()
    user.name = 'John Doe'

    expect(wrapper.find('[role="loader"]').text()).toBe('Loading messages...')
  })

  test('should be positioned at the bottom of the chat', () => {
    setTimeout(() => {
      expect(wrapper.vm.$el.scrollTop).toBe(wrapper.vm.$el.scrollHeight)
    }, 50)
  })
})
