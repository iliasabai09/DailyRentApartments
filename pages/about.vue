<template>
  <h1>This is About page</h1>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app'

const {data} = useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<style scoped lang="scss">

</style>
