<template>
    <component
        :is="icons[icon]"
        :style="{
          width:scale + 'px',
          height: scale + 'px',
          fill: 'red'
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
    default: '#000'
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
  star: defineAsyncComponent(() => import('../svgs/icons/IconStar.vue'))
}

</script>

<style scoped>

</style>
