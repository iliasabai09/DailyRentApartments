<template>
  <div class="header_container">
    <div class="header">
      <div class="header_left_block">
        <HeaderLogo />
        <button class="city_title"><img src="~/public/cityIcon.svg" alt=""/><CityBtn /></button>
      </div>

      <HeaderLinkList />
    </div>

    <HeaderCategories />
  </div>
</template>

<script setup>
import HeaderLogo from "~/components/ui/HeaderLogo.vue";
import HeaderLinkList from "~/components/Header/HeaderLinkList.vue";
import HeaderCategories from "~/components/HeaderCategories/HeaderCategories.vue";
import CityBtn from "~/components/CityBtn/CityBtn.vue";
</script>

<style scoped>
.header {
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_container {
  margin-bottom: 40px;
}

.header_left_block {
    display: flex;
    align-items: center;
    gap: 50px;
}

.city_title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    color: #186fa5;
    cursor: pointer;
    background-color: #fff;
}
</style>