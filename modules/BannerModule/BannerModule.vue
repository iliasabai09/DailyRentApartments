<template>
  <div class="carousel-wrapper">
    <v-carousel
        style="height: calc(100vh - 85px); position: fixed;top: 85px"
        show-arrows
        cycle
        hide-delimiter-background
    >
      <template v-slot:prev="{ props }">
        <div
            class="prevBtn"
            @click="props.onClick"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20C0 8.96 8.96 0 20 0ZM20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36ZM20 18H28V22H20V28L12 20L20 12V18Z"
                fill="white"/>
          </svg>
        </div>
      </template>
      <template v-slot:next="{ props }">
        <div class="nextBtn" @click="props.onClick">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 40C8.96 40 7.83308e-07 31.04 1.74846e-06 20C2.7136e-06 8.96 8.96 -2.7136e-06 20 -1.74846e-06C31.04 -7.83308e-07 40 8.96 40 20C40 31.04 31.04 40 20 40ZM20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4ZM20 22L12 22L12 18L20 18L20 12L28 20L20 28L20 22Z"
                fill="white"/>
          </svg>
        </div>
      </template>
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

.prevBtn {
  position: absolute;
  bottom: 0;
  z-index: 2;
  left: 44%;
  cursor: pointer;
}

.nextBtn {
  position: absolute;
  bottom: 0;
  z-index: 2;
  right: 44%;
  cursor: pointer;
}

.carousel-wrapper {
  &::v-deep {
    .v-carousel__controls {
    }
  }
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
