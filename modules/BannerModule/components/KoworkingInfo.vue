<template>
  <div class="info" @mouseenter="emits('animate',true)" @mouseleave="emits('animate',false)">
    <div class="TTitleMedium text-white">Коворкинг центр Токио</div>
    <div class="TSmall text-white">г. Астана, ул. Бухар жырау 19</div>
    <div class="TText text-white">
      <div>+7 777 244 02 60</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emits = defineEmits(['animateEnter', 'animateLeave'])
</script>

<style scoped lang="scss">
.info {
  border-radius: 16px;
  border: 1px solid var(--primary);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  transition: .3s ease;
  cursor: pointer;

  &:hover {
    transition: .3s ease;
    background-color: #303437;
    border: 1px solid #303437;
  }
}
</style>
