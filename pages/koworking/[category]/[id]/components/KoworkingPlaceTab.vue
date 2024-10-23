<template>
  <NuxtLink :to="'/koworking/workspace/' + id" v-if="type === 'workspace'" class="tab" :class="{ 'tab-active': active}">
    <svg width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M7.13333 27.8H6.1C4.38792 27.8 3 29.1879 3 30.9C3 32.6121 4.38792 34 6.1 34H41.2333C42.9454 34 44.3333 32.6121 44.3333 30.9C44.3333 29.1879 42.9454 27.8 41.2333 27.8H40.2M7.13333 27.8H40.2M7.13333 27.8V9.61374C7.13333 7.29885 7.13333 6.14055 7.58384 5.25638C7.98012 4.47864 8.61198 3.84678 9.38971 3.45051C10.2739 3 11.4322 3 13.7471 3H33.5871C35.902 3 37.0578 3 37.942 3.45051C38.7197 3.84678 39.3537 4.47864 39.7499 5.25638C40.2 6.13968 40.2 7.29659 40.2 9.60695V27.8"
          stroke-width="4.13333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div>Выбор Рабочего место</div>
  </NuxtLink>
  <NuxtLink :to="'/koworking/negotiation/' + id" v-if="type === 'negotiation'" class="tab"
            :class="{ 'tab-active': active}">
    <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M31.1335 34C31.1335 30.5758 26.5071 27.8 20.8002 27.8C15.0933 27.8 10.4669 30.5758 10.4669 34M39.4002 27.8008C39.4002 25.2584 36.8497 23.0734 33.2002 22.1167M2.2002 27.8008C2.2002 25.2584 4.75066 23.0734 8.4002 22.1167M33.2002 13.8213C34.4686 12.686 35.2669 11.0362 35.2669 9.2C35.2669 5.77583 32.491 3 29.0669 3C27.4789 3 26.0304 3.59696 24.9335 4.57871M8.4002 13.8213C7.13178 12.686 6.33353 11.0362 6.33353 9.2C6.33353 5.77583 9.10936 3 12.5335 3C14.1215 3 15.57 3.59696 16.6669 4.57871M20.8002 21.6C17.376 21.6 14.6002 18.8242 14.6002 15.4C14.6002 11.9758 17.376 9.2 20.8002 9.2C24.2244 9.2 27.0002 11.9758 27.0002 15.4C27.0002 18.8242 24.2244 21.6 20.8002 21.6Z"
          stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div>Выбор Переговорного</div>
  </NuxtLink>
  <NuxtLink :to="'/koworking/conference/' + id" v-if="type === 'conference'" class="tab"
            :class="{ 'tab-active': active}">
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M25.9287 33.9044C25.9287 29.5125 20.5881 25.9521 14.0002 25.9521C7.41232 25.9521 2.07178 29.5125 2.07178 33.9044M29.5631 6.41306C30.3015 7.1515 30.8873 8.02815 31.2869 8.99297C31.6866 9.95779 31.8927 10.9925 31.8927 12.0368C31.8927 13.0811 31.6868 14.1131 31.2871 15.0779C30.8875 16.0427 30.3015 16.9204 29.5631 17.6588M33.8809 2.09521C35.1863 3.4006 36.2218 4.95032 36.9283 6.65589C37.6348 8.36146 37.9999 10.1892 37.9999 12.0353C37.9999 13.8814 37.6355 15.7098 36.9291 17.4154C36.2226 19.121 35.1863 20.6709 33.8809 21.9762M14.0002 19.9879C9.60829 19.9879 6.04792 16.4275 6.04792 12.0356C6.04792 7.64365 9.60829 4.08329 14.0002 4.08329C18.3921 4.08329 21.9525 7.64365 21.9525 12.0356C21.9525 16.4275 18.3921 19.9879 14.0002 19.9879Z"
          stroke-width="3.97615" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div>Выбор Конференц- зала</div>
  </NuxtLink>
  <NuxtLink :to="'/koworking/offices/' + id" v-if="type === 'offices'" class="tab" :class="{ 'tab-active': active}">
    <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M11.6875 9.75H8.20038C6.03017 9.75 4.94426 9.75 4.11536 10.1723C3.38623 10.5439 2.79386 11.1362 2.42235 11.8654C2 12.6943 2 13.7802 2 15.9504V26.8004C2 28.9706 2 30.0551 2.42235 30.884C2.79386 31.6131 3.38623 32.2066 4.11536 32.5781C4.94345 33 6.02805 33 8.19401 33H30.681C32.8469 33 33.93 33 34.7581 32.5781C35.4872 32.2066 36.0816 31.6131 36.4531 30.884C36.875 30.0559 36.875 28.9729 36.875 26.8069V15.944C36.875 13.7781 36.875 12.6935 36.4531 11.8654C36.0816 11.1362 35.4872 10.5439 34.7581 10.1723C33.9292 9.75 32.8456 9.75 30.6754 9.75H27.1875M11.6875 9.75H27.1875M11.6875 9.75C11.6875 5.46979 15.1573 2 19.4375 2C23.7177 2 27.1875 5.46979 27.1875 9.75"
          stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div>Выбор Офиса</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

defineProps({
  type: String as PropType<'workspace' | 'conference' | 'negotiation' | 'offices'>,
  active: Boolean,
  id: String

})
</script>

<style scoped lang="scss">
.tab {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #EFEFEF;
  border-radius: 16px 16px 0 0;
  height: 75px;
  padding: 0 16px;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  color: #000;

  svg {
    stroke: #FFB85D;
  }

  &-active {
    background-color: #FFB85D;
    font-weight: 700;

    svg {
      stroke: #000;
    }
  }
}
</style>
