<template>
  <div class="container">
    <div class="banner">
      <div class="banner-content">
        <div class="banner-text">Все коворкинги города Алматы</div>
        <!--        <div class="banner-actions">-->
        <!--          <LButtonFilled :title="'Ilias'"/>-->
        <!--        </div>-->
      </div>
      <div class="banner-backdrop"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.banner {
  position: relative;
  width: 100%;
  aspect-ratio: 10 / 4;
  background-image: url("https://kompastour.com/useruploads/regions/region_c54074d5c3.jpg");
  background-size: cover;
  border-radius: 16px;
  cursor: pointer;

  &-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.20);
    transition: .5s ease;
    border-radius: 16px;

    &:hover {
      transition: .5s ease;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  &-content {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &-actions {

  }

  &-text {
    font-size: 32px;
    color: #fff;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
