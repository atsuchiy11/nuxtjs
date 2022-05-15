<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <DemoPageCard />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NuxtLogo from '~/components/logo-nuxt/index.vue'
import VuetifyLogo from '~/components/logo-vuetify/index.vue'
import DemoPageCard from '~/components/demo-card/index.vue'

@Component({
  components: {
    NuxtLogo,
    VuetifyLogo,
    DemoPageCard,
  },
})
export default class DemoTopPage extends Vue {}
</script>
