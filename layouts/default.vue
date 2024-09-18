<template>
  <div class="nuxt">
    <HeaderModule/>
    <div id="progressbar">
      <LProgressbar/>
    </div>
    <div class="page" :class="{ pageAnimate: animate }">
      <NuxtPage/>
    </div>
    <div class="banner">
      <BannerModule @animateBanner="animate = $event"/>
    </div>
<!--    <FooterModule/>-->
  </div>
  <!-- Modals -->
  <LModal :dialog-opened="false">
    <ModalLocations/>
  </LModal>
</template>

<script setup lang="ts">
// import FooterModule from '../components/module/FooterModule.vue'
import BannerModule from '../modules/BannerModule/BannerModule.vue'
import { ref } from 'vue'
import HeaderModule from '../modules/HeaderModule/HeaderModule.vue'

const animate = ref(false)

</script>

<style scoped>
.nuxt {
  min-height: 100vh;
}

.page {
  position: relative;
  z-index: 10;
  opacity: 1;
  margin-top: 85px;
  transition: .3s ease;
}

.pageAnimate {
  opacity: .3;
  transition: .3s ease;
}

.banner {

}

#progressbar {
  visibility: hidden;
}
</style>
