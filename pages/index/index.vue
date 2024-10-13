<template>
  <div class="offices container">
    <h1 class="offices-heading">BOOKING-OFFICE</h1>
    <KoworkingFilters
        :title="'Поиск коворкинга'"
        :fields="koworkingFilters"
        :has-result="false"
        :from-koworking="true"
        @getCoworkings="getCoworkings"
    />
  </div>
</template>

<script setup lang="ts">
import { koworkingFilters } from '../koworking/constants'
import { navigateTo } from 'nuxt/app'

async function getCoworkings() {
  navigateTo('/koworking')
}
</script>

<style scoped lang="scss">
.offices {
  &-heading {
    transition: .6s ease;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-size: 70px;
    color: #fff;
    margin-bottom: 32px;
    text-align: center;
  }
}
</style>
