<template>
  <div class="categories_bg">
    <div class="header_categories">
      <NuxtLink to="/office" class="office">Аренда офисов</NuxtLink>
      <NuxtLink to="/" class="categorie">Коворкинги</NuxtLink>
      <NuxtLink to="/advertise" class="advertise">Реклама</NuxtLink>
      <NuxtLink to="/news" class="categorie">Новости</NuxtLink>
      <NuxtLink to="/consulting" class="categorie">Консалтинг</NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>


<style scoped>
.categories_bg {
  background-color: #f4f5f6;
}
.header_categories {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 30px;

  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}

.categorie {
  color: #383838;
}
.office {
  background: linear-gradient(90deg, #cf32cc 0.02%, #913ffa 56.79%, #61a0fd);
  border-radius: 23px;
  color: #fff;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  padding: 3px 10px;
}

.advertise {
  color: #186fa5;
}
</style>