<template>
  <div>
    <v-progress-linear v-if="isLoading" indeterminate></v-progress-linear>
    <v-container v-if="!isLoading" class="d-flex justify-space-between">
      <KbnTaskList
        v-for="status in statuses"
        :key="status"
        :status="status"
        :tasks="getTasksByStatus(status)"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Getter } from "vuex-class";
import { Task, Status } from "~/services/interface";
import { getStatus } from "~/services/ui";
import KbnTaskList from "~/components/kbn-task-list/index.vue";

@Component({
  name: "KbnTopPage",
  components: { KbnTaskList },
})
export default class KbnTopPage extends Vue {
  @Getter("tasks/tasks")
  tasks: Task[] | null;

  @Prop()
  isLoading: boolean;

  @Prop({ type: Function })
  sayHello: () => void;

  get statuses() {
    return getStatus();
  }

  getTasksByStatus(status: Status) {
    if (!this.tasks) return [];
    return this.tasks.filter((t) => t.status === status);
  }

  async mounted() {
    await this.sayHello();
  }
}
</script>
