<template>
  <button :style="{width:scale,height:scale}">
    <LIcon :icon="icon" :iconColor="iconColor" :scale="iconScale"/>
  </button>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { type IconTypes } from '../../shared/types/libs/iconsTypes.enum'

defineProps({
  icon: {
    type: String as PropType<IconTypes>,
    required: true
  },
  iconColor: {
    type: String,
    required: false,
    default: '#000'
  },
  scale: {
    type: String,
    default: '40px',
    required: false
  },
  iconScale: {
    type: String,
    default: '25',
    required: false
  },
})
</script>

<style scoped lang="scss">
button {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: .3s ease;
  background-color: inherit;

  &:hover {
    background-color: var(--hover-btn);
  }
}
</style>
