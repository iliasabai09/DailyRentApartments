<template>
  <div class="container">
    <div class="detail">
      <h1 class="THeadMedium detail-title">Коворкинг центр Токио</h1>
      <div class="line"></div>
      <KoworkingDetail/>
      <div class="line"></div>
      <div class="detail-tabs">
        <koworking-place-tab :id="route.params.id" type="workspace" :active="route.params.category === 'workspace'"/>
        <koworking-place-tab :id="route.params.id" type="conference" :active="route.params.category === 'conference'"/>
        <koworking-place-tab :id="route.params.id" type="offices" :active="route.params.category === 'offices'"/>
        <koworking-place-tab :id="route.params.id" type="negotiation" :active="route.params.category === 'negotiation'"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KoworkingDetail from './components/KoworkingDetail.vue'
import KoworkingPlaceTab from './components/KoworkingPlaceTab.vue'
import { ref } from 'vue'
import { useRoute } from 'nuxt/app'

const route = useRoute()

</script>

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

  &-tabs {
    display: flex;
    gap: 4px;

    div {
      flex: 1;
    }
  }
}

.line {
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
  margin: 16px 0;
}
</style>
