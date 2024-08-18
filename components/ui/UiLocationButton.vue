<template>
  <button @click="emits('openLocationModal')">
    <img src="public/gifs/geolocation.gif" width="50" alt="loader"/>
    <span class="TTextMedium">Алматы</span>
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emits = defineEmits(['openLocationModal'])
</script>

<style scoped lang="scss">
button {
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .4s ease;
  padding: 0 16px 0 0;
  border-radius: 16px;
  color: var(--primary);

  &:hover {
    background-color: var(--hover-btn);
  }
}
</style>
