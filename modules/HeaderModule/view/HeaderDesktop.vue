<template>
  <header>
    <div class="container">
      <div class="header">
        <UiLogo/>
        <div class="header-links">
          <UiNavLink v-for="link in links" :title="link.title" :link="link.link"/>
        </div>
        <UiLocationBtn @click="emits('openModal')"/>
        <UiLanguageBtn/>
        <UiLogoutBtn/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import UiLogo from '../components/ui/UiLogo.vue'
import UiNavLink from '../components/ui/UiNavLink.vue'
import UiLocationBtn from '../components/ui/UiLocationBtn.vue'
import UiLanguageBtn from '../components/ui/UiLanguageBtn.vue'
import UiLogoutBtn from '../components/ui/UiLogoutBtn.vue'

defineProps({
  links: {
    type: Object as PropType<{ title: string, link: string }[]>
  }
})

const emits = defineEmits(['openModal'])
</script>

<style scoped lang="scss">
header {
  background-color: #303437;
  height: 85px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 32px;

  &-links {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 48px;
    justify-content: center;
  }
}

</style>
