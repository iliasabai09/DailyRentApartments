<template>
  <main-view :category="category"/>
</template>

<script setup lang="ts">
import MainView from '../components/MainView.vue'
import { useRoute } from 'nuxt/app'

const route = useRoute()
const category: string = route.params.category as string

</script>

<style scoped>

</style>
