<template>
  <div class="price"><span class="TTitleMedium">{{ 'от 155 000' }} т </span>/ {{ 'месяц' }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  price: String,
  fromDate: String
})
</script>

<style scoped lang="scss">
.price {
  span {
    background-color: var(--primary);
    margin-right: 8px;
    padding: 0 4px;
  }
}
</style>
