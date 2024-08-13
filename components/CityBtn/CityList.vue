<template>
  <div @click="close" class="city_list">
    <div class="city_item">

      <div class="city_header">
        <h2>Выберите город</h2>
        <button @click="close" class="x_btn"><img src="~/public/close.svg" alt="x" class="x"></button>
      </div>

     <div class="city_container">
        <div v-for="city in cities" :key="city.id" class="city" @click="choosedCity(city.name)">
          {{ city.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
const emit = defineEmits(['currentCity'])
const close = inject("closeCityCard");

const currentCity = ref("");

const cities = ref([
  { id: 1, name: "Алматы" },
  { id: 2, name: "Нур-Султан" },
  { id: 3, name: "Шымкент" },
  { id: 4, name: "Караганда" },
  { id: 5, name: "Актобе" },
  { id: 6, name: "Тараз" },
  { id: 7, name: "Павлодар" },
  { id: 8, name: "Усть-Каменогорск" },
  { id: 9, name: "Семей" },
  { id: 10, name: "Атырау" },
  { id: 11, name: "Костанай" },
  { id: 12, name: "Кызылорда" },
  { id: 13, name: "Петропавловск" },
  { id: 14, name: "Актау" },
  { id: 15, name: "Темиртау" },
  { id: 16, name: "Туркестан" },
  { id: 17, name: "Уральск" },
  { id: 18, name: "Экибастуз" },
  { id: 19, name: "Рудный" },
  { id: 20, name: "Каскелен" },
  { id: 21, name: "Талдыкорган" },
  { id: 22, name: "Капшагай" },
]);

const choosedCity = (city) => {
    currentCity.value = city
}

emit('currentCity', currentCity)
</script>


<style scoped>
.city_list {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.city_header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.city_item {
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 700px;
  width: 90%;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  background-color: #fff;
  text-align: start;
  border-radius: 16px;
}

.city_container {
  max-height: 400px; 
  overflow-y: auto; 
  margin-top: 10px;
  border-top: 1px solid #ddd;
}

.city {
  padding: 10px 25px;
  font-size: 20px;
  cursor: pointer;
}

.city:hover {
    background-color: #e1dfdf2a;
    border-radius: 8px;
}

.x_btn {
    background-color: #fff;
    cursor: pointer;
}
</style>