/* eslint-disable no-console */
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import ConnectionStatus from './ConnectionStatus.vue'

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<ConnectionStatus />', () => {
  let wrapper: VueWrapper

  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(ConnectionStatus).toBeTruthy()
    // Mount the component
    wrapper = mount(ConnectionStatus)
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  describe('check the connection status', () => {
    afterEach(() => wrapper.unmount())

    test('should show the offline status', () => {
      wrapper = mount(ConnectionStatus, {
        props: {
          isConnected: false,
        },
      })
      const span = wrapper.get('span').element

      expect(wrapper.find('p').text()).toBe('Offline')
      expect(span.getAttribute('class')).toContain(['bg-red-500'])
    })

    test('should show the online status', () => {
      const wrapper = mount(ConnectionStatus, {
        props: {
          isConnected: true,
        },
      })
      const span = wrapper.get('span').element

      expect(wrapper.find('p').text()).toBe('Online')
      expect(span.getAttribute('class')).toContain(['bg-green-500'])
    })
  })
})
