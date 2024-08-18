<template>
  <div class="card">
    <div class="card-img" :style="{backgroundImage: 'url(' + coworking.image + ')'}">
      <div class="card-title">
        {{ coworking.title }}
      </div>
    </div>
    <div class="card-specs">
      <div class="card-spec" v-for="spec in coworking.specs">
        <img :src="spec.icon" :alt="spec.title">
        <div>{{ spec.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  coworking: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  min-width: 320px;

  &-img {
    width: 100%;
    height: 200px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background-size: cover;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;
    z-index: 1;
    text-align: center;
    margin-bottom: 12px;
    justify-content: center;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    &:hover {
      transform: scale(1.01);
      transition: .3s ease;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: inherit;
      background-size: inherit;
      background-position: inherit;
      filter: brightness(70%);
      z-index: -1;
    }
  }

  &-specs {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &-spec {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
