<template>
  <div class="container">
    <div class="coworking">
      <div class="coworking-title">Все коворкинги Казахстана</div>
      <div class="coworking-blocks">
        <BKzCoworking :coworking="coworking" v-for="coworking in kzCoworkings"/>
        <BKzCoworking :coworking="coworking" v-for="coworking in kzCoworkings"/>
        <BKzCoworking :coworking="coworking" v-for="coworking in kzCoworkings"/>
        <BKzCoworking :coworking="coworking" v-for="coworking in kzCoworkings"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BKzCoworking from '../blocks/BKzCoworking.vue'
import { ref } from 'vue'

const kzCoworkings = ref([
  {
    id: 1,
    title: 'Коворкинги Алматинской области',
    image: 'https://www.kovorkingi.ru/static/images/main/moscow_400x200.webp',
    link: '',
    specs: [
      {
        id: 1,
        icon: 'https://www.kovorkingi.ru/static/images/main/icons/moscow_shield.svg',
        title: 'Все коворкинги Москвы',
        link: ''
      },
      {
        id: 2,
        icon: 'https://www.kovorkingi.ru/static/images/main/icons/moscow_metro.svg',
        title: 'Коворкинги по станции метро',
        link: ''
      }
    ]
  }
])

</script>

<style scoped lang="scss">
.coworking {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &-title {
    font-size: 28px;
    text-align: center;
    font-style: italic;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &-blocks {
    display: flex;
    gap: 24px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (max-width: 768px) {
      overflow-x: scroll;
    }
  }
}
</style>
