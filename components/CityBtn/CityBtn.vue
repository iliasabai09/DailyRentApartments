<template>
  <div>
    <div @click="openCityCard">{{ CityName }}</div>

    <div v-if="cardOpened" class="fix"><CityList @currentCity="currentCityValue"/></div>
  </div>
</template>

<script setup>
import CityList from '~/components/CityBtn/CityList.vue'
import { provide, ref } from "vue";

const CityName = ref("Алматы");
const cardOpened = ref(false);
const openCityCard = () => {
  cardOpened.value = true;
};

const closeCityCard = () => {
  cardOpened.value = false;
};

const currentCityValue = (city) => {
    CityName.value = city
}

provide('closeCityCard', closeCityCard)
</script>


<style scoped>
.city_title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    color: #186fa5;
    cursor: pointer;
}
</style>