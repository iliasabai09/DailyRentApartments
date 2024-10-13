<template>
  <div class="content">
    <div class="filters">
      <div class="filters-title THeadLarge">{{ title }}</div>
      <div class="filters-selects">
        <v-select
            class="filters-select"
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

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  fields: {
    type: Object as PropType<{ field: string, options: string[], label: string }[]>
  },
  hasResult: {
    type: Boolean,
    required: false,
    default: false
  },
  fromKoworking: {
    type: Boolean,
    required: false,
    default: false
  }
})

const router = useRouter()

const model = ref({
  region: null,
  comforts: null
})


function navigateParams() {

  router.push({
    path: props.fromKoworking ? '/koworking' : '',
    query: {
      ...model.value
    }
  })
  emits('getCoworkings')
}

const emits = defineEmits(['getCoworkings'])

</script>

<style scoped lang="scss">
.hasResultHeading {
  max-height: 0 !important;
  transition: .3s ease;
  overflow-y: hidden !important;
}

.content {
  width: 100%;

  .filters {
    background-color: #F1F1F1;
    border-radius: 16px;
    padding: 16px 64px;

    &-title {
      margin-bottom: 16px;
    }

    &-selects {
      display: flex;
      gap: 32px;
    }

    &-select {
      flex: 1;
    }
  }
}
</style>
