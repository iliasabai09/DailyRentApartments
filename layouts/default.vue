<template>
  <div class="nuxt">
    <HeaderModule/>
    <div id="progressbar">
      <LProgressbar/>
    </div>
    <BMainNavigation/>
    <NuxtPage/>
    <FooterModule/>
  </div>
</template>

<script setup lang="ts">
import HeaderModule from '../components/module/HeaderModule.vue'
import FooterModule from '../components/module/FooterModule.vue'</script>

<style scoped>
.nuxt {
  min-height: 100vh;
}

#progressbar {
  visibility: hidden;
}
</style>
