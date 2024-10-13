<template>
  <div class="offices container" :class="{'offices-animate': coworkings}">
    <h1 class="offices-heading" :class="{'animate-heading': coworkings}">BOOKING-OFFICE</h1>
    <KoworkingFilters
        :title="categoryTitle"
        :fields="categoryFilters"
        :has-result="!!coworkings"
        @getCoworkings="getCoworkings"
    />
    <div class="offices-result" :class="{'offices-result_animate': coworkings}">
      <KoworkingResultList :coworkings="coworkings" v-model:page="page"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { ref } from 'vue'
import {
  conferenceFilters,
  koworkingFilters,
  negotiationsFilters,
  officesFilters,
  workSpaceFilters
} from '../constants'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

const route = useRoute()
const page = ref(1)
const coworkings = ref<any>(null)

const categoryTitle: string = {
  coworkings: 'Поиск коворкинга',
  offices: 'Поиск оффиса',
  workSpaces: 'Поиск рабочего места',
  conference: 'Поиск конференц зала',
  negotiations: 'Поиск переговорной'
}[props.category] || 'Категория'

const categoryFilters = {
  coworkings: koworkingFilters,
  offices: officesFilters,
  workSpaces: workSpaceFilters,
  conference: conferenceFilters,
  negotiations: negotiationsFilters
}[props.category] as string

async function getCoworkings() {
  const params = route.query
  coworkings.value = [
    {
      id: 1,
      title: 'Коворкинг центр Токио',
      img: '/koworking_1.jpg',
      rating: 3,
      reviewsCount: 26,
      type: 'Офис',
      price: 155000,
      priceFrom: 'месяц',
      description: '130 кв. м пространства для проведения мастер-классов, выставок, фотосессий и видео съемок',
      address: 'пр. Тауелсиздик 15/2, 3 этаж',
      createdFrom: '22.10.2024'
    }
  ]
}
</script>

<style scoped lang="scss">
.offices {
  &-heading {
    transition: .6s ease;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-size: 70px;
    color: #fff;
    margin-bottom: 32px;
    text-align: center;
  }

  .animate-heading {
    transition: .6s ease;
    height: 0;
    margin-bottom: 16px;
  }
}

.offices-result {
  opacity: 0;
  flex: 1;
  margin-top: 16px;

  &_animate {
    opacity: 1;
    animation-delay: 4.8s;
    animation: move .3s ease;
  }
}

@keyframes result {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
