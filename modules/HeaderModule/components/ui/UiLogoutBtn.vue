<template>
<button class="logoutBtn">
  <LIcon :icon="'logout'"/>
</button>
</template>

<script setup>

</script>

<style scoped>
.logoutBtn {
  background-color: var(--primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
}
</style>
