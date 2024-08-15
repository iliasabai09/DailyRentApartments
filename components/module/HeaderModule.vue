<template>
  <header>
    <div class="container">
      <div class="header">
        <UiLogo/>
        <div class="specs UDesktop">
          <LazyUiLocationButton/>
          <div class="USpacer"></div>
          <UiCreateCoworkingButton/>
          <UILanguageButton/>
          <UiLoginButton/>
        </div>
        <div class="USpacer"></div>
        <div class="UMobile">
          <UiIconButton :icon="'menu'" scale="60px" icon-scale="30"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import UILanguageButton from '../ui/UILanguageButton.vue'
import UiCreateCoworkingButton from '../ui/UiCreateCoworkingButton.vue'
import UiIconButton from '../ui/UiIconButton.vue'</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 32px;
}

.specs {
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
