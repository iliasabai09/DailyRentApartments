<template>
  <v-dialog
      v-model="dialog"
      width="auto"
  >
    <slot></slot>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'

const dialog = ref(false)
const props = defineProps({
  dialogOpened: {
    type: Boolean,
    required: true,
    default: false
  }
})

watch(
    () => props.dialogOpened,
    () => dialog.value = props.dialogOpened
)
watch(
    () => dialog.value,
    () => !dialog.value && emits('close')
)

const emits = defineEmits(['close'])
</script>

<style scoped>

</style>
