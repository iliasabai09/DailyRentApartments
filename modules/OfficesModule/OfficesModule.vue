<template>
  <div class="offices container" :class="{'offices-animate': coworkings}">
    <h1>BOOKING-OFFICE</h1>
    <KoworkingFilters
        :title="'ПОИСК ОФФИСА'"
        :fields="filterFields"
        :has-result="!!coworkings"
        @getCoworkings="getCoworkings"
    />
    <div class="offices-result" :class="{'offices-result_animate': coworkings}">
      <KoworkingResultList :coworkings="coworkings"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import KoworkingFilters from '../../components/blocks/KoworkingFilters.vue'
import { useOffices } from './composables'

const {
  coworkings,
  filterFields,
  getCoworkings
} = useOffices()

</script>

<style scoped lang="scss">
h1 {
  font-size: 70px;
  line-height: 60px;
  color: #fff;
  margin-bottom: 32px;
  text-align: center;
}

.offices {
  display: flex;
  flex-direction: column;
  gap: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: .6s ease;
  z-index: 1;
  position: fixed;

  &-animate {
    top: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    transition: .6s ease;
    z-index: 1;
    position: fixed;
  }
}

.offices-result {
  opacity: 0;

  &_animate {
    opacity: 1;
    animation-delay: 4.8s;
    animation: move .3s ease;
  }
}

@keyframes result {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
