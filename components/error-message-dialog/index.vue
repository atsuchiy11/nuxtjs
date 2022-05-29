<template>
  <v-dialog :value="errorMessage" persistent max-width="650px">
    <v-card>
      <v-toolbar color="error" >エラーが発生しました</v-toolbar>
      <v-card-text>
        <div class="pa-8">
          <v-alert v-show="errorMessage" dense outlined type="error">
            {{ errorMessage }}
          </v-alert>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="close">閉じる</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Action, Getter } from "vuex-class";
import { ErrorMessage } from "~/services/ui/error";

@Component({
  name: "ErrorMessageDialog"
})
export default class ErrorMessageDialog extends Vue {
  @Getter("error/message")
  message: ErrorMessage | null;

  @Action("error/reset")
  reset: () => void;

  get errorMessage() {
    if (this.message == null) return "";
    return this.message.message;
  }

  close() {
    this.reset();
  }
}
</script>
