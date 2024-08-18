<template>
  <button
      :class="[color + 'Btn', border + 'Border']"
      class="TMiddleLarge"
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
  },
  border: {
    type: String as PropType<'large' | 'small'>,
    required: false,
    default: 'small'
  }
})
</script>

<style scoped lang="scss">
button {
  background-color: inherit;
  height: 45px;
  border-radius: 8px;
  border: none;
  padding: 0 16px;
  width: fit-content;
  transition: .3s ease;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

.primaryBtn {
  color: #fff;
  background-color: var(--primary);

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transition: .3s ease;
    opacity: .9;
  }
}

.largeBorder {
  border-radius: 16px;
}

.smallBorder {
  border-radius: 8px;
}
</style>
