import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { spyOn } from 'vitest'
import BoardInfo from './BoardInfo.vue'
import { useUserStore } from '~/stores/user'

beforeAll(() => {
  // Create pinia instance
  setActivePinia(createPinia())
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<BoardInfo />', () => {
  let wrapper: VueWrapper

  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(BoardInfo).toBeTruthy()
    // Mount the component
    wrapper = mount(BoardInfo)
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the welcome message', () => {
    const user = useUserStore()
    user.name = 'John Doe'

    wrapper = mount(BoardInfo)
    expect(wrapper.find('p').text()).toBe('John Doe')
  })
})
