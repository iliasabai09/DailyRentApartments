<template>
  <div class="info" @mouseenter="emits('animate',true)" @mouseleave="emits('animate',false)">
    <div class="TTitleMedium text-white">Коворкинг центр Токио</div>
    <div class="TSmall text-white">г. Астана, ул. Бухар жырау 19</div>
    <div class="TText text-white info-contacts">
      <div>+7 777 244 02 60</div>
      <div class="socials">
        <LIcon class="UPointer" icon="instagram" size="24" color="white"/>
        <LIcon class="UPointer" :icon="'telegram'" size="24" color="white"/>
        <LIcon class="UPointer" :icon="'whatsapp'" size="24" color="white"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emits = defineEmits(['animateEnter', 'animateLeave'])
</script>

<style scoped lang="scss">
.socials {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info {
  border-radius: 16px;
  border: 1px solid var(--primary);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  transition: .3s ease;
  cursor: pointer;

  &-contacts {
    display: flex;
    gap: 8px;
    justify-content: space-between;
  }

  &:hover {
    transition: .3s ease;
    background-color: #303437;
    border: 1px solid #303437;
  }
}
</style>
