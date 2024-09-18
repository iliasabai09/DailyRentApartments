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
import KoworkingFilters from '../../components/blocks/KoworkingFilters.vue'
import { useRoute } from 'nuxt/app'
import { watch } from 'vue'

const route = useRoute()

// Тут будет логика на получение параметров для запроса через query параметры
watch(
    () => route.query,
    () => {
      console.log(route.query)
    }
)

</script>

<style scoped>

</style>
