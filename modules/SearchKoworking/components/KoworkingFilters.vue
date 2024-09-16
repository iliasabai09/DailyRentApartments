<template>
  <div class="content">
    <div class="content-heading">
      <h1>BOOKING-OFFICE</h1>
      <!--      <div>Все коворкинги Казахстана</div>-->
    </div>
    <div class="filters">
      <div class="filters-title TTitleMedium">ПОИСК КОВОРКИНГА</div>
      <div class="filters-selects">
        <v-select
            label="Тип помещения"
            :items="['Оффис', 'Конференс зал', 'Переговорная', 'Рабочее место']"
            variant="solo"
            multiple
        ></v-select>
        <v-select
            label="Регион"
            :items="['Georgia', 'Texas', 'Wyoming']"
            variant="solo"
            multiple
        ></v-select>
        <LButton :title="'НАЙТИ'" иа/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.content {
  width: 100%;

  &-heading {
    display: flex;
    flex-direction: column;
    gap: 1px;
    color: #fff;
    text-align: center;
    margin-bottom: 32px;

    h1 {
      font-size: 70px;
      line-height: 60px;
    }
  }

  .filters {
    background-color: #F1F1F1;
    border-radius: 16px;
    padding: 32px 64px;

    &-title {
      margin-bottom: 16px;
    }

    &-selects {
      display: flex;
      gap: 32px;
    }
  }
}
</style>
