<template>
  <img class="vuetify-logo" alt="Vuetify Logo" src="/vuetify-logo.svg" />
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class LogoVuetify extends Vue {}
</script>

<style>
.vuetify-logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
