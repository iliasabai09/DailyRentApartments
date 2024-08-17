<template>
  <div class="container">
    <div class="rates">
      <div class="rates-title">Тарифы по коворкингам</div>
      <div class="rates-blocks">
        <BRateCard :rate="rate" v-for="rate in rates"/>
        <BRateCard :rate="rate" v-for="rate in rates"/>
        <BRateCard :rate="rate" v-for="rate in rates"/>
        <BRateCard :rate="rate" v-for="rate in rates"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref, type UnwrapRef } from 'vue'
import { Rate } from '../../domain/entities/Rate.model'
import { arrToEntity } from '../../shared/utils/arrToEntity'
import { type IRate } from '../../domain/interfaces/rate.interface'

const rates: Ref<UnwrapRef<Rate[]>> = ref([])

onMounted(() => {
  const init: IRate[] = [
    {
      id: '',
      title: 'Офис на 4 места в коворкинге Телеграф Дмитровская прпагвы апывашп пгшвпоа ыапывп врфыпаыроап вавы',
      paymentPeriod: 'месяц',
      price: 58000,
      floor: {number: 3, in: 10},
      area: 20,
      buildingClass: 'A',
      address: 'Дмитровское шоссе, 81, Москва,',
      images: ['https://www.kovorkingi.ru/data/files/img/std/1000000/9000/8024-1-f626d594532b.jpg'],
      conveniences: [],
      availableServices: [],
      description: 'Оборудованные офисы в ковоpкингe «TEЛEГРАФ» в БЦ Ритм Cеть ковoркингов «ТЕЛEГPAФ» — сoвременноe oфисное пpocтранствo, котoрое oбъединяeт вcе для пoлноцeннoй и комфортной работы. Это гибкий paбoчий oфис: кaбинеты, oрen spаcе, переговорные и общие зоны. Помимо рабочих мест, здесь есть кафе и лаунж зоны',
      spaceType: 'офис',
      rentalTypes: [],
      coworkingName: 'Телеграф Дмитровская'
    }
  ]
  rates.value = arrToEntity<IRate, Rate>(init, Rate)
})
</script>

<style scoped lang="scss">
.rates {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  &-title {
    font-size: 28px;
    text-align: center;
    font-style: italic;
  }

  &-blocks {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 16px;
    justify-content: space-between;
  }
}
</style>
