<template>
  <v-dialog
      v-model="dialog"
      width="auto"
  >
    <slot></slot>
    <div style="background-color: #fff">Ilias</div>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'

const dialog = ref(false)
const props = defineProps({
  dialogOpened: {
    type: Boolean,
    required: true,
    default: false
  }
})

onMounted(() => {
  dialog.value = props.dialogOpened
})
</script>

<style scoped>

</style>
