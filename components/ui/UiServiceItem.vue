<template>
  <div class="item">
    <LIcon :icon="icon" size="24" :stroke="icons[icon].stroke" :color="icons[icon].color"/>
    <div class="TMiddle">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { type IconTypes } from '../../shared/types/libs/iconsTypes.enum'

defineProps({
  icon: {
    type: String as PropType<IconTypes>
  },
  text: {
    type: String
  }
})

const icons = {
  wifi: {color: '', stroke: 'var(--primary)'},
  coffee: {color: '', stroke: 'var(--primary)'},
  parking: {color: 'var(--primary)', stroke: ''},
  printer: {color: '', stroke: 'var(--primary)'},
  namaz: {color: '', stroke: ''},
  fruits: {color: 'var(--primary)', stroke: ''},
  clouds: {color: '', stroke: 'var(--primary)'},
  sun: {color: '', stroke: 'var(--primary)'}
}

</script>

<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
