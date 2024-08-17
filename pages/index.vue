<template>
  <div class="index">
    <LModal :dialog-opened="false"/>
    <MainBannerModule/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.index {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 16px 0;
}
</style>
