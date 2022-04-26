import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import type { TestingPinia } from '@pinia/testing'
import { createTestingPinia } from '@pinia/testing'
import MessageComp from './Message.vue'
import { getDate, getTime } from '~/utils/main/main'
import { useUserStore } from '~/stores/user'
import { message } from '~/__mocks__/message'

let pinia: TestingPinia

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
  // Create pinia instance
  pinia = createTestingPinia({
    initialState: {
      user: { name: 'John Doe' },
    },
  })
})

describe('<Tag />', () => {
  let wrapper: VueWrapper
  const props = {
    data: message,
  }
  const global = {
    plugins: [pinia],
  }

  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // Mount the component
    wrapper = mount(MessageComp, { props, global })
    // The component should exists
    expect(MessageComp).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the message', () => {
    // Mount the component
    wrapper = mount(MessageComp, { props, global })
    // Format date and time
    const createdAt = getDate(wrapper.props().data.createdAt, '/')
    const updatedAt = getTime(wrapper.props().data.updatedAt, ':')
    // Show the formatted message
    expect(wrapper.find('div').text()).toBe(`${wrapper.props().data.user}: ${wrapper.props().data.body} (${createdAt} - ${updatedAt})`)
  })

  test('should be my message', () => {
    // Mount the component
    wrapper = mount(MessageComp, { props, global })
    // Get the div element
    const div = wrapper.find('div')
    // Should have that class
    expect(div.classes()).toContain('text-right')
  })

  test('should not be my message', () => {
    // Use the user store and change the name state
    const user = useUserStore()
    user.name = 'Foo'
    // Mount the component
    wrapper = mount(MessageComp, { props, global })
    // Get the div element
    const div = wrapper.find('div')
    // Should not have that class
    expect(div.classes()).not.toContain('text-right')
  })
})
