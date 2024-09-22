<template>
  <div class="coworkings" :class="{ 'coworkings-animate': coworkings }">
    <div class="coworkings-header">
      <h2 class="THeadMedium">{{ 'ОФИСЫ АСТАНА' }}</h2>
    </div>
    <div class="line"></div>
    <pre>{{ coworkings }}</pre>
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

.coworkings {
  padding: 16px;
  background-color: #fff;
  border-radius: 16px;
  opacity: 0;
  transition: .6s ease;

  &-animate {
    opacity: 1;
    transition: .6s ease;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
