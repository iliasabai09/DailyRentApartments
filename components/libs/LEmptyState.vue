<template>
  <v-empty-state
      :headline="headline"
      :title="title"
      text="The page you were looking for does not exist"
      image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
  ></v-empty-state>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  headline: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  text: {
    type: String,
    required: false,
    default: ''
  },
  image: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<style scoped>

</style>
