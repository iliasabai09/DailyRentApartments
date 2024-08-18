<template>
  <v-menu :activator="activator">
    <v-list>
      <v-list-item
          v-for="(item, index) in list"
          :key="index"
          :value="item[value]"
          @click="emits('select', item[value])"
      >
        <v-list-item-title>{{ item[label] }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

defineProps({
  list: {
    type: Object as PropType<any[]>,
    required: true,
    default: []
  },
  activator: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: false,
    default: 'title'
  },
  value: {
    type: String,
    required: false,
    default: 'value'
  }
})

const emits = defineEmits(['select'])

</script>

<style scoped>

</style>
