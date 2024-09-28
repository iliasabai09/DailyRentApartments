<template>
  <div class="coworkings" :class="{ 'coworkings-animate': coworkings }">
    <div class="coworkings-header">
      <h2 class="THeadMedium">{{ 'ОФИСЫ АСТАНА' }}</h2>
      <div class="viewModes">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="14" height="14" fill="#FFB85D"/>
          <rect y="18" width="14" height="14" fill="#FFB85D"/>
          <rect x="18" width="14" height="14" fill="#FFB85D"/>
          <rect x="18" y="18" width="14" height="14" fill="#FFB85D"/>
        </svg>
        <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="7" fill="#D9D9D9"/>
          <rect y="12" width="32" height="7" fill="#D9D9D9"/>
          <rect y="23" width="32" height="7" fill="#D9D9D9"/>
        </svg>
      </div>
    </div>
    <div class="line"></div>
    <div class="result">
      <KoworkingCard :koworking="koworking" v-for="koworking of coworkings"/>
      <KoworkingCard :koworking="koworking" v-for="koworking of coworkings"/>
      <KoworkingCard :koworking="koworking" v-for="koworking of coworkings"/>
      <KoworkingCard :koworking="koworking" v-for="koworking of coworkings"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

defineProps({
  coworkings: {
    type: Object as PropType<any>
  }
})

</script>

<style scoped lang="scss">
.line {
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
  margin: 16px 0;
}

.viewModes {
  display: flex;
  gap: 16px;
  align-items: center;

  svg {
    cursor: pointer;
  }
}

.coworkings {
  padding: 16px;
  background-color: #fff;
  border-radius: 16px;
  opacity: 0;
  transition: .6s ease;
  height: 100%;

  &-animate {
    opacity: 1;
    transition: .6s ease;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .result {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
}
</style>
