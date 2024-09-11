<template>
<div class="locationBtn TTextMedium">
  <div>Алматы</div>
  <LIcon :color="'#fff'" :icon="'geo'"/>
</div>
</template>

<script setup></script>

<style scoped>
.locationBtn {
  text-decoration: underline;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
</style>
