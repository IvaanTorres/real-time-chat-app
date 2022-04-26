import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import TagComp from './Tag.vue'
import type Tag from '~/models/Tag'

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<Tag />', () => {
  let wrapper: VueWrapper
  let tag: Tag

  beforeAll(() => {
    // Create a tag instance
    tag = {
      _id: '1',
      message: 'Hello world',
    }
    // Mount the component
    wrapper = mount(TagComp, {
      props: {
        data: tag,
      },
    })
  })

  afterAll(() => wrapper.unmount())

  test('should mount', () => {
    // The component should exists
    expect(TagComp).toBeTruthy()
    // The component should be mounted
    expect(wrapper).toBeTruthy()
  })

  test('should show the tag', () => {
    expect(wrapper.find('p').text()).toBe(tag.message)
  })
})
