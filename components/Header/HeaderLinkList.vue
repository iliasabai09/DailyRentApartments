<template>
  <div class="link_list">
    <NuxtLink to="/addSpace" class="add_Space">
      <img src="~/public/plus.svg" alt="" class="add_SpaceImg" />
      <p class="add_SpaceText">Добавить пространство</p></NuxtLink
    >
    <ContactList />

    <NuxtLink to="/login" class="log_in">
      <img src="~/public/login.svg" alt="" class="login_img"/>
      <p>Вход</p></NuxtLink
    >
  </div>
</template>

<script setup>
import ContactList from "~/components/Header/ContactList.vue";
</script>

<style scoped>
.link_list {
  display: flex;
  align-items: center;
  gap: 20px;
}
.add_Space {
  display: flex;
  align-items: center;
  gap: 6px;
}

.add_SpaceImg {
  widows: 18px;
  height: 19px;
}

.add_SpaceText {
  color: #586973;
  font-size: 14px;
}

.log_in {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #186fa5;
  font-size: 16px;
  padding-left: 20px;
}
</style>