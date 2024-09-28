<template>
  <div class="koworking">
    <pre>{{ koworking }}</pre>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

defineProps({
  koworking: {
    type: Object as PropType<any>
  }
})
</script>

<style scoped lang="scss">
.koworking {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 10%; /* Отступ от левого края */
    right: 10%; /* Отступ от правого края */
    bottom: 100%; /* Линия будет сверху */
    height: 1px; /* Толщина линии */
    background-color: #000; /* Цвет линии */
  }

  &:not(:first-child)::before {
    display: block; /* Показать линию между элементами */
  }

  &:first-child::before {
    display: none; /* Не показывать линию перед первым элементом */
  }
}
</style>
