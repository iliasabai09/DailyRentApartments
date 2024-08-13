<template>
  <h1>This is main page</h1>
</template>

<script setup lang="ts">
import { useHttpClient } from '../shared/api/httpClient'

const {data, error, status, pending} = useHttpClient('/todos/1')

</script>

<style scoped>

</style>
