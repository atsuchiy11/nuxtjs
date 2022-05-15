import { mount } from '@vue/test-utils'
import LogoVuetify from '~/components/logo-vuetify/index.vue'

describe('NuxtLogo', () => {
  test('is as Vue instance', () => {
    const wrapper = mount(LogoVuetify)
    expect(wrapper.vm).toBeTruthy()
  })
})
