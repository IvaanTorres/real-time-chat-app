import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import type { TestingPinia } from '@pinia/testing'
import { createTestingPinia } from '@pinia/testing'
import { createI18n } from 'vue-i18n'
import MessageComp from '~/components/Message.vue'
import { getDate, getTime } from '~/utils/main/main'
import { useUserStore } from '~/stores/user'
import { message } from '~/__mocks__/message'
import { messages } from '~/modules/i18n'
import { externalUser, user } from '~/__mocks__/user'

let pinia: TestingPinia

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

describe('<Tag />', () => {
  let wrapper: VueWrapper
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })
  const props = {
    data: message,
  }
  const plugins = {
    plugins: [pinia, i18n],
  }

  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // Mount the component
    wrapper = mount(MessageComp, { props, global: plugins })
    // The component should exists
    expect(MessageComp).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the message', () => {
    // Mount the component
    wrapper = mount(MessageComp, { props, global: plugins })
    // Format date and time
    const createdAt = getDate(wrapper.props().data.createdAt, '/')
    const updatedAt = getTime(wrapper.props().data.updatedAt, ':')
    // Show the formatted message
    expect(wrapper.find('[role="message-body"]').text()).toBe(`${wrapper.props().data.body}`)
    expect(wrapper.find('[role="message-info"]').text()).toBe(`${wrapper.props().data.user} - ${createdAt} (${updatedAt})`)
  })

  test('should be my message', () => {
    // Mount the component
    wrapper = mount(MessageComp, { props, global: plugins })
    // Get the div element
    const div = wrapper.find('[role="message"]')
    // Should be positionned to the right
    expect(div.classes()).toContain('ml-auto')
  })

  test('should not be my message', () => {
    // Use the user store and change the name state
    const user = useUserStore()
    user.name = externalUser.username
    // Mount the component
    wrapper = mount(MessageComp, { props, global: plugins })
    // Get the div element
    const div = wrapper.find('[role="message"]')
    // Should not have that class
    expect(div.classes()).toContain('mr-auto')
  })
})
