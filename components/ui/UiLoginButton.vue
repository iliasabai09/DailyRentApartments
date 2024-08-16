<template>
  <button>
    <LIcon :icon="'account_circle'" color="var(--primary)" scale="25"/>
    <span class="TMiddleMedium">Войти</span>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
button {
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .4s ease;
  padding: 0 16px;
  border-radius: 16px;
  height: 40px;
  gap: 4px;
  color: var(--primary);
/*  @media (max-width: 768px) {
    border-radius: 50%;
    padding: 0;
    justify-content: center;
    min-width: 40px;
    height: 40px;
  }*/

  &:hover {
    background-color: var(--hover-btn);
  }
}
</style>
