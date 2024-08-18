<template>
  <header>
    <div class="container">
      <div class="header">
        <UiLogo/>
        <div class="specs UDesktop">
          <UiLocationButton @openLocationModal="locationModal = true"/>
          <div class="USpacer"></div>
          <UiCreateCoworkingButton/>
          <UILanguageButton v-if="isDesktop()" :currentLocale="currentLocale" @selectLanguage="selectLanguage($event)"/>
          <UiLoginButton/>
        </div>
        <div class="USpacer"></div>
        <div v-if="!isDesktop()" class="header-mobileActions">
          <UILanguageButton :currentLocale="currentLocale" @selectLanguage="selectLanguage($event)"/>
          <UiIconButton :icon="'menu'" scale="60px" icon-scale="30"/>
        </div>
      </div>
    </div>
  </header>

  <!-- MODALS -->
  <LModal :dialog-opened="locationModal" @close="locationModal = false">
    <ModalLocations/>
  </LModal>
</template>

<script setup lang="ts">
import UILanguageButton from '../ui/UILanguageButton.vue'
import UiCreateCoworkingButton from '../ui/UiCreateCoworkingButton.vue'
import UiIconButton from '../ui/UiIconButton.vue'
import { useCityUseCase } from '../../domain/useCases/LanguageUserCase'
import { ref } from 'vue'
import { isDesktop } from '../../shared/helpers/device'

const currentLocale = ref(useCityUseCase.getLanguageLocale())
const locationModal = ref(false)

const selectLanguage = (lng: string) => {
  useCityUseCase.selectLanguage(lng)
}

const openLocationModal = function () {

}
</script>

<style scoped lang="scss">
header {
  background-color: #fff;
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 32px;
  @media (max-width: 768px) {
    height: 60px;
  }

  &-mobileActions {
    display: flex;
    align-items: center;
  }
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
