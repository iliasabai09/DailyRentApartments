<template>
  <div class="modal">
    <div class="modal-header TTextLarge">Выберите город</div>
    <div class="modal-section">
      <div
          v-ripple
          :class="{ selectedItem: city.cityCode === selectedCity }"
          class="modal-city"
          v-for="city in locations"
          @click="selectedCity = city.cityCode"
      >
        <div class="TMiddleMedium">{{ city.title }}</div>
        <div>
          <v-radio
              :value="city.cityCode"
              v-model="selectedCity"
              color="var(--primary)"
          ></v-radio>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <LButtonOutlined :title="'Отмена'" :border="'large'" color="warn"/>
      <LButtonFilled :title="'Сохранить'" :border="'large'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCity = ref(6)

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
  border-radius: 8px;
  background-color: #fff;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;

  .selectedItem {
    background-color: var(--primary-light);
  }

  &-header {
    height: 60px;
    padding: 0 16px;
    display: flex;
    align-items: center;
  }

  &-section {
    flex: 1;
    overflow-y: scroll;
  }

  &-city {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    padding: 0 16px;
    width: 100%;
    cursor: pointer;
  }

  &-footer {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 16px;
    gap: 16px;

    button {
      width: 100%;
    }
  }
}
</style>
