import { mount } from '@vue/test-utils'
import LogoNuxt from '~/components/logo-nuxt/index.vue'

describe('LogoNuxt', () => {
  test('is as Vue instance', () => {
    const wrapper = mount(LogoNuxt)
    expect(wrapper.vm).toBeTruthy()
  })
})
