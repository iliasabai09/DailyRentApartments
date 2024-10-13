<template>
  <HeaderDesktop
      :links="links"
      @openModal="modalOpened = true"
  />
  <LModal :dialog-opened="modalOpened" @close="modalOpened = false">
    <ModalLocations :step-val="2"/>
  </LModal>
</template>

<script setup lang="ts">
import HeaderDesktop from './view/HeaderDesktop.vue'
import { useHeaderModule } from './composables'

const links = [
  {title: 'РАБОЧЕЕ МЕСТО', link: '/koworking/workSpaces'},
  {title: 'ПЕРЕГОВОРНЫЕ', link: '/koworking/negotiations'},
  {title: 'КОНФЕРЕНС ЗАЛЫ', link: '/koworking/conference'},
  {title: 'ОФИСЫ', link: '/koworking/offices'}
]

const {
  modalOpened
} = useHeaderModule()

</script>

<style scoped >

</style>
