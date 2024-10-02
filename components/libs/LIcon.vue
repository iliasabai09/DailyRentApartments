<template>
    <component
        :is="icons[icon]"
        :style="{
          width:scale + 'px',
          height: scale + 'px',
          fill: color,
          stroke
        }"
    />
</template>

<script setup lang="ts">
import { defineAsyncComponent, defineProps, type PropType } from 'vue'
import { type IconTypes } from '../../shared/types/libs/iconsTypes.enum'


defineProps({
  icon: {
    type: String as PropType<IconTypes>,
    required: true
  },
  scale: {
    type: String,
    default: '20',
    required: false
  },
  color: {
    type: String,
    required: false,
    default: ''
  },
  stroke: {
    type: String,
    required: false,
    default: ''
  }
})

const icons = {
  menu: defineAsyncComponent(() => import('../svgs/icons/IconMenu.vue')),
  close: defineAsyncComponent(() => import('../svgs/icons/IconClose.vue')),
  account_circle: defineAsyncComponent(() => import('../svgs/icons/IconAccountCircle.vue')),
  translate: defineAsyncComponent(() => import('../svgs/icons/IconTranslate.vue')),
  add: defineAsyncComponent(() => import('../svgs/icons/IconAdd.vue')),
  geo: defineAsyncComponent(() => import('../svgs/icons/IconGeo.vue')),
  arrowBottom: defineAsyncComponent(() => import('../svgs/icons/IconArrowBottom.vue')),
  logout: defineAsyncComponent(() => import('../svgs/icons/IconLogout.vue')),
  whatsapp: defineAsyncComponent(() => import('../svgs/icons/IconWhatsapp.vue')),
  telegram: defineAsyncComponent(() => import('../svgs/icons/IconTelegram.vue')),
  instagram: defineAsyncComponent(() => import('../svgs/icons/IconInstagram.vue')),
  star: defineAsyncComponent(() => import('../svgs/icons/IconStar.vue')),
  wifi: defineAsyncComponent(() => import('../svgs/icons/IconWifi.vue')),
  coffee: defineAsyncComponent(() => import('../svgs/icons/IconCoffee.vue')),
  parking: defineAsyncComponent(() => import('../svgs/icons/IconParking.vue')),
  printer: defineAsyncComponent(() => import('../svgs/icons/IconPrinter.vue')),
  namaz: defineAsyncComponent(() => import('../svgs/icons/IconNamaz.vue')),
  fruits: defineAsyncComponent(() => import('../svgs/icons/IconFruits.vue')),
  clouds: defineAsyncComponent(() => import('../svgs/icons/IconClouds.vue')),
  sun: defineAsyncComponent(() => import('../svgs/icons/IconSun.vue')),
}

</script>

<style scoped>

</style>
