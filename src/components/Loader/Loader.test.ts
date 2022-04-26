import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import Loader from './Loader.vue'

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<Loader />', () => {
  let wrapper: VueWrapper

  beforeEach(() => { wrapper = mount(Loader) })
  afterEach(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(Loader).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the loading message', () => {
    expect(wrapper.find('p').text()).toBe('Loading messages...')
  })
})
