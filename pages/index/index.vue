<template>
  <div class="index">
    <main-view category="coworkings" :filters="koworkingFilters"/>
  </div>
</template>

<script setup lang="ts">
import MainView from './components/MainView.vue'
import { koworkingFilters } from './constants'

</script>

<style scoped lang="scss">
.index {
}
</style>
