<template>
  <BlockDesktopHeader :links="links"/>
  <!-- MODALS -->
  <LModal :dialog-opened="locationsModalOpened" @close="locationsModalOpened = false">
    <ModalLocations/>
  </LModal>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCityUseCase } from '../../domain/useCases/City.useCase'
import BlockDesktopHeader from '../blocks/BlockDesktopHeader.vue'

const locationsModalOpened = ref(false)

onMounted(() => {
  const cityName = useCityUseCase.getCityName()
  if (cityName) locationsModalOpened.value = true
})

const links = [
  {title: 'РАБОЧЕЕ МЕСТО', link: 'workSpace'},
  {title: 'ПЕРЕГОВОРНЫЕ', link: 'workSpace'},
  {title: 'КОНФЕРЕНС ЗАЛЫ', link: 'conference'},
  {title: 'ОФИСЫ', link: 'office'}
]
</script>

<style scoped lang="scss">
header {
  background-color: #303437;
  height: 85px;
  display: flex;
  align-items: center;
}

.header {

}

</style>
