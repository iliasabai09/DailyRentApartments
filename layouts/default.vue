<template>
  <div class="nuxt">
    <HeaderModule/>
    <NuxtPage/>
    <FooterModule/>
  </div>
</template>

<script setup lang="ts">
import HeaderModule from '../components/module/HeaderModule.vue'
import FooterModule from '../components/module/FooterModule.vue'</script>

<style scoped>
.nuxt {
  background-color: var(--ligh-bg);
  min-height: 100vh;
}
</style>
