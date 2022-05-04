import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { spyOn } from 'vitest'
import { createI18n } from 'vue-i18n'
import BoardInfo from '~/components/BoardInfo.vue'
import { useUserStore } from '~/stores/user'
import { messages } from '~/modules/i18n'

beforeAll(() => {
  // Create pinia instance
  setActivePinia(createPinia())
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<BoardInfo />', () => {
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

  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(BoardInfo).toBeTruthy()
    // Mount the component
    wrapper = mount(BoardInfo, global)
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the welcome message', () => {
    const user = useUserStore()
    user.name = 'John Doe'

    wrapper = mount(BoardInfo, global)
    expect(wrapper.find('[role="username"]').text()).toBe('John Doe')
  })
})
