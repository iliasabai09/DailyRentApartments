<template>
  <div class="offices container">
    <KoworkingFilters
        :title="'Поиск оффиса'"
        :fields="[
            {
              label: 'Все районы',
              options: ['Алматинский район', 'Байконурский район','Есильский район','Нуринский район'],
              field: FilterFields.REGION
            },
            {
              label: 'Удобства',
              options: ['Интернет (проводной)', 'Принтер','Парковка','Намазхана'],
              field: FilterFields.COMFORTS
            },
        ]"
    />
  </div>
</template>

<script setup lang="ts">
import { FilterFields } from '../../shared/constants/enums'
import KoworkingFilters from '../../components/blocks/KoworkingFilters.vue'</script>

<style scoped>

</style>
