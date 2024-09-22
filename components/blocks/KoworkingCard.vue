<template>
  <div class="koworking"></div>
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

}
</style>
