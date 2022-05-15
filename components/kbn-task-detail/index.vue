<template>
  <v-dialog
    :value="true"
    max-width="450px"
    persistent
    @click:outside="onCancel"
    @keydown.esc="onCancel"
  >
    <v-form v-model="valid">
      <v-card>
        <v-card-title>
          {{ title }}
          <v-spacer></v-spacer>
          <v-btn icon @click="onCancel">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            ref="label"
            label="タスク名"
            outlined
            dense
            :v-model="name"
            :rules="nameRules"
          ></v-text-field>
          <v-textarea label="説明" outlined :v-model="description"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onUpdate">更新</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Emit } from 'vue-property-decorator'

@Component
export default class KbnTaskDetail extends Vue {
  @Prop()
  title: string

  @Emit('click:cancel')
  onCancel() {
    return
  }

  valid: boolean = false
  name: string | null = null
  description: string | null = null
  nameRules = [(v) => !!v || 'タスク名は必須です']

  // TODO
  onUpdate() {
    alert('onUpdate')
  }
}
</script>
