<template>
  <div class="carousel-wrapper">
    <v-carousel
        style="height: calc(100vh - 85px); position: fixed;top: 85px"
        show-arrows="hover"
        cycle
        hide-delimiter-background
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
      >
        <img class="slide" :class="{slideAnimate: animate}" :src="slide" alt="slide">
      </v-carousel-item>
    </v-carousel>
    <KoworkingInfo @animate="animateBanner($event)"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KoworkingInfo from './components/KoworkingInfo.vue'

const slides = ref(['/images/banner.jpg', '/images/banner.jpg'])
const animate = ref(false)

const emits = defineEmits(['animateBanner'])

const animateBanner = (animateBanner) => {
  animate.value = animateBanner
  emits('animateBanner', animateBanner)
}
</script>

<style scoped lang="scss">
.carousel-wrapper {
  position: fixed;
  z-index: 1;
}

.slide {
  width: 100vw;
  height: calc(100vh - 85px);
  filter: grayscale(100%) brightness(40%);
  transition: .6s ease;
}

.slideAnimate {
  transition: .6s ease;
  filter: grayscale(0%) brightness(50%);
}
</style>
