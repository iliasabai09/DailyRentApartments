<template>
  <div class="content">
    <div class="content-heading">
      <h1>BOOKING-OFFICE</h1>
      <!--      <div>Все коворкинги Казахстана</div>-->
    </div>
    <div class="filters">
      <div class="filters-title TTitleMedium">{{ title }}</div>
      <div class="filters-selects">
        <v-select
            v-for="select in fields"
            v-model="model[select.field]"
            :label="select.label"
            :items="select.options"
            variant="solo"
            multiple
        ></v-select>
        <LButton :title="'НАЙТИ'" @click="navigateParams"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType, ref } from 'vue'
import { useRouter } from 'nuxt/app'

defineProps({
  title: {
    type: String,
    required: true
  },
  fields: {
    type: Object as PropType<{ field: string, options: string[], label: string }[]>
  },
  animate: {
    type: Boolean,
    required: false,
    default: false
  }
})

const model = ref({
  region: null,
  comforts: null
})

const router = useRouter()

function navigateParams() {
  router.push({
    query: {
      ...model.value
    }
  })
}


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
