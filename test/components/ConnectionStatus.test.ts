/* eslint-disable no-console */
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import { createI18n } from 'vue-i18n'
import ConnectionStatus from '~/components/ConnectionStatus.vue'
import { messages } from '~/modules/i18n'

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<ConnectionStatus />', () => {
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
    expect(ConnectionStatus).toBeTruthy()
    // Mount the component
    wrapper = mount(ConnectionStatus, global)
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
        global: {
          plugins: [i18n],
        },
      })
      const span = wrapper.get('span').element

      expect(wrapper.find('[role="status"]').text()).toBe('Offline')
      expect(span.getAttribute('class')).toContain(['bg-red-500'])
    })

    test('should show the online status', () => {
      const wrapper = mount(ConnectionStatus, {
        props: {
          isConnected: true,
        },
        global: {
          plugins: [i18n],
        },
      })
      const span = wrapper.get('span').element

      expect(wrapper.find('[role="status"]').text()).toBe('Online')
      expect(span.getAttribute('class')).toContain(['bg-green-500'])
    })
  })
})
