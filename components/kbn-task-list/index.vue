<template>
  <v-card class="flex-grow-1 flex-shrink-0 mr-2" rounded="xl">
    <v-card-title>
      {{ status }}
      <v-spacer></v-spacer>
      <v-btn icon @click="onOpen">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <KbnTaskDetail
        v-if="isOpen"
        title="新規タスク作成"
        @click:cancel="onClose"
      />
    </v-card-title>
    <v-card-text>
      <draggable
        :id="`draggable-${status}`"
        class="draggable"
        group="tasks"
        v-bind="options"
        @start="onDragStart"
        @end="onDrop"
      >
        <KbnTaskCard
          v-for="task in getTasksByStatus(status)"
          :key="task.id"
          :task="task"
        />
      </draggable>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { Task, Status } from "~/services/interface";
import KbnTaskCard from "~/components/kbn-task-card/index.vue";
import KbnTaskDetail from "~/components/kbn-task-detail/index.vue";
import draggable from "vuedraggable";
import { arrayMoveImmutable } from "array-move";

@Component({
  components: { KbnTaskCard, KbnTaskDetail, draggable },
})
export default class KbnTaskList extends Vue {
  @Prop()
  status: Status;

  @Getter("tasks/tasks")
  tasks: Task[] | null;

  @Mutation("tasks/setTasks")
  setTasks: ({ tasks }) => void;

  getTasksByStatus(status: Status) {
    if (!this.tasks) return [];
    return this.tasks.filter((t) => t.status === status);
  }

  dragTaskStatus: Status | null = null;
  dropTaskStatus: Status | null = null;
  newTasks: Task[] | null = null;
  isOpen: boolean = false;

  onOpen() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }

  options = {
    group: "tasks",
    animation: 200,
  };

  onDragStart(ev) {
    this.dragTaskStatus = ev.to.id.split("-")[1];
  }

  onDrop(ev) {
    this.dropTaskStatus = ev.to.id.split("-")[1];

    // TIPS ディープコピーする
    this.newTasks = this.tasks.map((task) => ({ ...task }));

    const [dragTaskIndex, dropTaskIndex] = [
      this.getTaskIndex(this.dragTaskStatus, ev.oldIndex),
      this.getTaskIndex(this.dropTaskStatus, ev.newIndex),
    ];

    this.updateStatus(dragTaskIndex);
    this.moveTasks(dragTaskIndex, dropTaskIndex);
    this.setTasks({ tasks: this.newTasks });
  }

  getTaskIndex(status: Status, evIndex: number) {
    const tasks = this.getTasksByStatus(status);
    const task = tasks[evIndex];
    return task
      ? this.tasks.findIndex((t) => t.id === task.id)
      : this.tasks.length;
  }

  updateStatus(dragTaskIndex: number) {
    if (this.dragTaskStatus !== this.dropTaskStatus) {
      this.newTasks[dragTaskIndex].status = this.dropTaskStatus;
    }
  }

  moveTasks(dragTaskIndex: number, dropTaskIndex: number) {
    // TIPS 隣接するタスクのステータス変更は入れ替えない
    if (
      this.dragTaskStatus === this.dropTaskStatus ||
      dragTaskIndex + 1 !== dropTaskIndex
    ) {
      this.newTasks = arrayMoveImmutable(
        this.newTasks,
        dragTaskIndex,
        dropTaskIndex
      );
    }
  }
}
</script>

<style lang="scss" scoped>
// paddingがないとドロップし辛い
.draggable {
  padding: 20px;
}
</style>
