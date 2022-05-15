import { mount } from '@vue/test-utils'
import TaskDetail from '~/components/task-detail/index.vue'

describe('TodoDialog', () => {
  test('is as Vue instance', () => {
    const wrapper = mount(TaskDetail)
    expect(wrapper.vm).toBeTruthy()
  })
})
