<template>
  <NuxtLink class="UPointer logo" to="/">
    <img src="https://www.kovorkingi.ru/static/images/logo.svg" height="40" alt="Logotype">
  </NuxtLink>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.logo {
  img {
    height: 40px;
    @media (max-width: 768px) {
      height: 28px;
    }
  }
}
</style>
