<template>
  <h1>{{ "data" }}{{ data }}</h1>
</template>

<script setup lang="ts">
import { CityUseCase } from '../domain/useCases/City.useCase'

const city = new CityUseCase()
const {data, error, status, pending} = city.getAllCities()
</script>

<style scoped>

</style>
