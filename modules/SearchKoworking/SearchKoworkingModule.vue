<template>
  <div class="carousel-wrapper">
    <div class="filters container">
      <KoworkingFilters/>
    </div>
  </div>
</template>

<script setup lang="ts">
import KoworkingFilters from './components/KoworkingFilters.vue'</script>

<style scoped>
.carousel-wrapper {

}

.filters {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;
}

</style>
