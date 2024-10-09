<template>
  <div class="modal">
    <template v-if="step === 1">
      <div class="step1">
        <div class="TTitleLarge">Ваш город <span class="textRed">{{ 'Алматы' }}</span>?</div>
        <div class="UPointer UUnderline UPointer TText" @click="step = 2">Выбрать другой город</div>
      </div>
    </template>
    <template v-if="step === 2">
      <div class="step2">
        <div class="step2-header">
          <div>X</div>
        </div>
        <div class="step2-locations">
          <div class="step2-location TTitleLarge" v-for="location in locations">{{ location.title }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useLocationModal } from '../../modules/HeaderModule/composables/useLocationModal'

const props = defineProps({
  stepVal: Number
})

const {
  step,
  locations
} = useLocationModal(props.stepVal)

</script>

<style scoped lang="scss">
.modal {
  border-radius: 16px;
  background-color: #fff;
}

.step1 {
  width: 460px;
  height: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
}

.step2 {
  display: flex;

  &-header {

  }

  &-locations {
    display: flex;
    flex-wrap: wrap;
  }

  &-location {
    width: 33.3333333%;
  }
}
</style>
