<template>
  <NuxtLink
      :to="`/offices/${koworking.id}`"
      :class="{
        vipCard: false,
      }"
      class="koworking"
  >
    <img :src="koworking.img" alt="koworking" width="300">
    <div class="detail">
      <div class="detail-title TSubHeadMedium">{{ koworking.title }}</div>
      <div class="detail-rating">
        <UiRatingStar :rating="3"/>
      </div>
      <div class="detail-review">26 отзывов</div>
      <div class="detail-type TTitleMedium">Офис</div>
      <UiPrice/>
      <div class="detail-description TSmall">{{ koworking.description }}</div>
      <div class="detail-location">
        <LIcon icon="geo" :color="'#fff'"/>
        <span class="TSmall">пр. Тауелсиздик 15/2, 3 этаж.</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import UiPrice from '../ui/UiPrice.vue'

defineProps({
  koworking: {
    type: Object as PropType<any>
  }
})
</script>

<style scoped lang="scss">
.vipCard {
  border: 2px solid var(--primary);
  background-color: #FFF7EC;
}

.koworking {
  border-radius: 16px;
  padding: 16px;
  display: flex;
  gap: 16px;
  color: #000;

  .detail {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &-title {
    }

    &-rating {
    }

    &-review {
      color: #7D7979;
      text-decoration: underline;
      cursor: pointer;
    }

    &-description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    &-location {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #7D7979;
    }
  }
}
</style>
