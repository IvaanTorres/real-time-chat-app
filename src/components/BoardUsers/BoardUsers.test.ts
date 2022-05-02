import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { spyOn } from 'vitest'
import BoardUsers from './BoardUsers.vue'

beforeAll(() => {
  // Create pinia instance
  setActivePinia(createPinia())
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<BoardUsers />', () => {
  test('should mount', () => {
    // The component should exists
    expect(BoardUsers).toBeTruthy()
    // Mount the component
    const wrapper = mount(BoardUsers)
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })
})
