<template>
  <v-card class="grey darken-2 mb-2" rounded="lg">
    <v-card-title>
      {{ task.title }}
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Task } from "~/services/interface";

@Component
export default class KbnTaskCard extends Vue {
  @Prop()
  task: Task;
}
</script>
