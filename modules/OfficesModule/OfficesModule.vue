<template>
  <div class="offices container" :class="{'offices-animate': coworkings}">
    <h1 class="offices-heading" :class="{'animate-heading': coworkings}">BOOKING-OFFICE</h1>
    <KoworkingFilters
        :title="'ПОИСК ОФФИСА' + page"
        :fields="filterFields"
        :has-result="!!coworkings"
        @getCoworkings="getCoworkings"
    />
    <div class="offices-result" :class="{'offices-result_animate': coworkings}">
      <KoworkingResultList :coworkings="coworkings" v-model:page="page"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import KoworkingFilters from '../../components/blocks/KoworkingFilters.vue'
import { useOffices } from './composables'
import { ref } from 'vue'


const {
  page,
  coworkings,
  filterFields,
  getCoworkings
} = useOffices()

</script>

<style scoped lang="scss">
h1 {

}

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

  .animate-heading {
    transition: .6s ease;
    height: 0;
    margin-bottom: 16px;
  }
}

.offices-result {
  opacity: 0;
  flex: 1;
  margin-top: 16px;

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
