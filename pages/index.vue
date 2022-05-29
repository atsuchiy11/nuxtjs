<template>
  <div>
    <KbnTopPage :is-loading="isLoading" :say-hello="sayHello" />>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Action, Getter } from "vuex-class";
import KbnTopPage from "~/components/kbn-top-page/index.vue";
import { sayHello } from "~/services/api";

@Component({
  components: {
    KbnTopPage,
  },
})
export default class IndexPage extends Vue {
  @Getter("tasks/isLoading")
  isLoading: boolean;

  @Action("tasks/startLoadingTasks")
  startLoadingTasks: () => void;

  @Action("error/handleServerError")
  handleServerError: (err) => Promise<void>;

  async mounted() {
    this.startLoading();
  }

  async sayHello() {
    try {
      await sayHello();
    } catch (err) {
      await this.handleServerError(err);
    }
  }

  async startLoading() {
    await this.startLoadingTasks();
  }
}
</script>
