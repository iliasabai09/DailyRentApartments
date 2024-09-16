<template>
  <div class="carousel-wrapper">
    <v-carousel
        style="height: calc(100vh - 85px);position: fixed;top: 85px"
        show-arrows="hover"
        cycle
        hide-delimiter-background
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
      >
        <img class="slide" :src="slide" alt="slide">
      </v-carousel-item>
    </v-carousel>
    <div class="filters container">
      <KoworkingFilters/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KoworkingFilters from './components/KoworkingFilters.vue'

const slides = ref(['/images/banner.jpg', '/images/banner.jpg'])
</script>

<style scoped>
.carousel-wrapper {

}

.filters {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.carousel {

}

.slide {
  width: 100vw;
  height: calc(100vh - 85px);
  /*filter: grayscale(100%) brightness(40%);*/
  filter: brightness(40%);
}
</style>
