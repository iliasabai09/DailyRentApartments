<template>
  <div class="rating">
    <LIcon
        v-for="star in 5"
        :icon="'star'"
        :color="'red'"
        @click="!readonly && (ratingModel = star)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineModel, defineProps } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true
  },
  readonly: {
    type: Boolean,
    default: false
  }
})

const ratingModel = defineModel({default: 4})

</script>

<style scoped lang="scss">
.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
