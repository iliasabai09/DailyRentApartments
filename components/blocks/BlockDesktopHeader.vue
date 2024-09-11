<template>
  <header>
    <div class="container">
      <div class="header">
        <UiLogo/>
        <div class="header-links">
          <UiNavLink v-for="link in links" :title="link.title" :link="link.link"/>
        </div>
        <UiLocationBtn/>
        <UiLanguageBtn/>
        <UiLogoutBtn/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  links: {
    type: Object as PropType<{ title: string, link: string }[]>
  }
})
</script>

<style scoped lang="scss">
header {
  background-color: #303437;
  height: 85px;
  display: flex;
  align-items: center;
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
