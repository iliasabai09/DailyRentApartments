<template>
  <button class="languageBtn" id="languageBtn">
    <span>RU</span>
    <LIcon icon="arrowBottom" color="var(--primary)" scale="14"/>
  </button>
  <LMenu :list="[{title: 'Русский', value: 'ru'},{title: 'Казакша', value: 'kz'}]" :activator="'#languageBtn'"/>
</template>

<script setup>
</script>

<style scoped>
.languageBtn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  cursor: pointer;
}
</style>
