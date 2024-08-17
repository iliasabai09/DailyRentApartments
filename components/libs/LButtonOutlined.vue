<template>
<button
    :class="[color + 'Btn']"
    class="TMiddleMedium"
    :disabled="disabled"
>
  {{ title }}
</button>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'info' | 'danger'>,
    required: false,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style scoped lang="scss">
button {
  background-color: inherit;
  height: 43px;
  border-radius: 8px;
  border: 2px solid;
  padding: 0 16px;
  width: fit-content;
  transition: .3s ease;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

.primaryBtn {
  color: var(--primary);

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transition: .3s ease;
    background-color: var(--primary-light);
  }
}
</style>
