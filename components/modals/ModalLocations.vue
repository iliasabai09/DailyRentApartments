<template>
  <div class="modal">
    <template v-if="step === 1">
      <div class="step1">
        <div class="TTitleLarge">Ваш город <span class="textRed">{{ city }}</span>?</div>
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
import { ref } from 'vue'

const step = ref(1)

const locations = ref([
  {
    id: '1',
    title: 'Алматы',
    cityCode: 1
  },
  {
    id: '2',
    title: 'Нур-Султан',
    cityCode: 2
  },
  {
    id: '3',
    title: 'Шымкент',
    cityCode: 3
  },
  {
    id: '4',
    title: 'Караганда',
    cityCode: 4
  },
  {
    id: '5',
    title: 'Актобе',
    cityCode: 5
  },
  {
    id: '6',
    title: 'Тараз',
    cityCode: 6
  },
  {
    id: '7',
    title: 'Павлодар',
    cityCode: 7
  },
  {
    id: '8',
    title: 'Усть-Каменогорск',
    cityCode: 8
  },
  {
    id: '9',
    title: 'Семей',
    cityCode: 9
  },
  {
    id: '10',
    title: 'Атырау',
    cityCode: 10
  },
  {
    id: '11',
    title: 'Костанай',
    cityCode: 11
  },
  {
    id: '12',
    title: 'Петропавловск',
    cityCode: 12
  },
  {
    id: '13',
    title: 'Кызылорда',
    cityCode: 13
  },
  {
    id: '14',
    title: 'Уральск',
    cityCode: 14
  },
  {
    id: '15',
    title: 'Актау',
    cityCode: 15
  },
  {
    id: '16',
    title: 'Темиртау',
    cityCode: 16
  },
  {
    id: '17',
    title: 'Туркестан',
    cityCode: 17
  },
  {
    id: '18',
    title: 'Кокшетау',
    cityCode: 18
  },
  {
    id: '19',
    title: 'Талдыкорган',
    cityCode: 19
  },
  {
    id: '20',
    title: 'Экибастуз',
    cityCode: 20
  }
])
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
