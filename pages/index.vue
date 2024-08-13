<template>
  <div class="main_filter_container">
    <div class="main_filter">
      <div class="filter_title">Аренда офисов <span class="city_title"><CityBtn /></span></div>

    </div>
  </div>
</template>

<script setup>
import CityBtn from "~/components/CityBtn/CityBtn.vue";
</script>


<style scoped>
.main_filter_container {
  display: flex;
  justify-content: center;
  background-image: url(https://www.kovorkingi.ru/data/mainpage/mpimg/sok-arena-park-02.jpg);
  max-width: 1280px;
  width: 100%;
  height: 250px;
  margin: 0 auto;
}

.main_filter {
  background-color: #fff;
  display: inline-block;
}

.filter_title {
  display: flex;
}

.city_title {
  cursor: pointer;
}
</style>