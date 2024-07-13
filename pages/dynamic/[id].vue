<template>
<pre>{{data}}</pre>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();
const {data} = useFetch('https://jsonplaceholder.typicode.com/todos/' + route.params.id)

</script>

<style scoped>

</style>
