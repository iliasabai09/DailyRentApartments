<template>
  <div class="text-center container">
    <v-row justify="end">
      <v-col cols="5" style="padding: 0">
        <v-pagination
            v-model="curPage"
            :length="total"
            class="my-4"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue'

defineProps({
  total: Number
})

const curPage = defineModel({default: 1})
</script>

<style scoped lang="scss">
.container {

  &::v-deep {
    li {
      margin: 2px;

      button {
        font-size: 12px;
        width: 34px;
        height: 34px;
      }
    }
  }
}
</style>
