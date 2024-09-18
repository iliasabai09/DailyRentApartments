<template>
  <HeaderDesktop :links="links"/>
</template>

<script setup lang="ts">
import HeaderDesktop from './view/HeaderDesktop.vue'

const links = [
  {title: 'РАБОЧЕЕ МЕСТО', link: 'workSpaces'},
  {title: 'ПЕРЕГОВОРНЫЕ', link: 'negotiations'},
  {title: 'КОНФЕРЕНС ЗАЛЫ', link: 'conference'},
  {title: 'ОФИСЫ', link: 'offices'}
]

</script>

<style scoped>

</style>
