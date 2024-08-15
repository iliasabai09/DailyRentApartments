<template>
  <button>
    <LIcon :icon="'add'" color="var(--primary)"/>
    <span class="TSmallMedium">Создать коворкинг</span>
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

  &:hover {
    background-color: var(--hover-btn);
  }
}
</style>
