<template>
  <div class="card">
    <div class="card-img" :style="{backgroundImage: 'url(' + rate.images[0] + ')'}"></div>
    <div class="card-specs">
      <div class="card-title TTextLarge">{{ rate.title }}</div>
      <div class="card-price TSmallLarge">{{ rate.price }}/{{ rate.paymentPeriod }}</div>
      <div class="card-actions">
        <LButtonOutlined :title="'Детали'" color="warn"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { Rate } from '../../domain/entities/Rate.model'

defineProps({
  rate: {
    type: Object as PropType<Rate>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-color: rgba(0, 255, 247, 0.04);
  cursor: pointer;
  box-shadow: var(--box-shadow);

  &-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    height: 48px;
    overflow: hidden;
  }

  &-specs {
    display: flex;
    flex-direction: column;
    padding: 0 16px 16px;
    gap: 12px;
  }

  &-img {
    height: 180px;
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 12px;
  }

  &-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: right;
  }
}
</style>
