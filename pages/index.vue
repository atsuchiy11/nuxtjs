<template>
  <div>
    <KbnTopPage :is-loading="isLoading" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Action, Getter } from 'vuex-class'
import KbnTopPage from '~/components/kbn-top-page/index.vue'

@Component({
  components: {
    KbnTopPage,
  },
})
export default class IndexPage extends Vue {
  @Getter('tasks/isLoading')
  isLoading: boolean

  @Action('tasks/startLoadingTasks')
  startLoadingTasks: () => void

  async mounted() {
    this.startLoading()
  }

  async startLoading() {
    await this.startLoadingTasks()
  }
}
</script>
