<template>
  <DemoTopPage />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DemoTopPage from '~/components/demo-top-page/index.vue'

@Component({
  components: { DemoTopPage },
})
export default class DemoPage extends Vue {}
</script>
