<template>
  <button
      :type="type"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'button'
  }
})
</script>

<style scoped lang="scss">
button {
  height: 57px;
  width: fit-content;
  color: #000;
  font-size: 16px;
  border-radius: 8px;
  background-color: var(--primary);
  padding: 0 32px;
  font-weight: bold;
}
</style>
