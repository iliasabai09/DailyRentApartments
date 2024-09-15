<template>
  <NuxtLink class="navLink" :to="link">{{ title }}</NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.navLink {
  font-size: 16px;
  color: var(--primary);
  font-weight: 500;
}
</style>
