import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { spyOn } from 'vitest'
import TagComp from './Tag.vue'
import { tag } from '~/__mocks__/tag'

beforeAll(() => {
  // Remove the warning messages
  spyOn(console, 'warn').mockImplementation(() => {})
})

describe('<Tag />', () => {
  let wrapper: VueWrapper

  beforeAll(() => {
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
    expect(wrapper.find('[role="tag-message"]').text()).toBe(tag.message)
  })
})
