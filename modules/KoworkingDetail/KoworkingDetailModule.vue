<template>
  <div class="container">
    <div class="detail">
      <h1 class="THeadMedium detail-title">Коворкинг центр Токио</h1>
      <div class="line"></div>
      <KoworkingDetail/>
    </div>
  </div>
</template>

<script setup lang="ts">
import KoworkingDetail from './components/KoworkingDetail.vue'</script>

<style scoped lang="scss">
.detail {
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  margin-top: 106px;

  &-title {
    display: flex;
    align-items: center;
  }
}

.line {
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
  margin: 16px 0;
}
</style>
