<template>
  <header>
    <div class="container">
      <div class="header">
        <UiLogo/>
        <LazyUiLocationButton/>
        <div class="USpacer"></div>
        <UiCreateCoworkingButton/>
        <UILanguageButton/>
        <UiLoginButton/>
        <UiIconButton :icon="'menu'"/>
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
</style>
