<template>
  <NuxtLink class="navLink" :class="{active:isActiveLink}" :to="link">{{ title }}</NuxtLink>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRoute } from 'nuxt/app'

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const route = useRoute()

const isActiveLink = computed(() => route.fullPath.includes(props.link))

</script>

<style scoped>
.navLink {
  font-size: 16px;
  color: var(--primary);
  font-weight: 500;
}

.active {
  color: #fff;
}
</style>
