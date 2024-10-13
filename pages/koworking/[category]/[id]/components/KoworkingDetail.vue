<template>
<div class="group">
  <div class="gallery">
    <img class="mainImg" src="/public/koworking_1.jpg" alt="koworking_1.jpg">
    <div class="gallery-secondary">
      <img src="/public/koworking_1.jpg" alt="koworking_1.jpg">
      <img src="/public/koworking_1.jpg" alt="koworking_1.jpg">
      <img src="/public/koworking_1.jpg" alt="koworking_1.jpg">
    </div>
  </div>
  <div class="info">
    <UiLocationItem/>
    <div class="info-review">
      <UiRatingStar/>
      <UiReviewsItem/>
    </div>
    <div class="info-contacts">
      <div class="info-contacts-block">
        <div class="TTextLarge">Контакты коворкинга</div>
        <div>+7 777 333 12 34</div>
        <UiEmailLink/>
      </div>
      <div class="info-contacts-block">
        <div class="TTextLarge">График работы</div>
        <div>Пн - Пт 24 / 7</div>
        <div>Сб - Вс Выходной</div>
      </div>
    </div>
    <div class="info-socials">
      <LIcon class="UPointer" icon="instagram" scale="24" color="white"/>
      <LIcon class="UPointer" :icon="'telegram'" scale="24" color="white"/>
      <LIcon class="UPointer" :icon="'whatsapp'" scale="24" color="white"/>
    </div>
    <div class="info-places">
      <div class="info-places_item">
        <div class="TTextMedium">Рабочее место</div>
        <UiPrice/>
      </div>
      <div class="info-places_item">
        <div class="TTextMedium">Переговорная</div>
        <UiPrice/>
      </div>
      <div class="info-places_item">
        <div class="TTextMedium">Конференц - зал</div>
        <UiPrice/>
      </div>
      <div class="info-places_item">
        <div class="TTextMedium">Офис</div>
        <UiPrice/>
      </div>
    </div>
  </div>
  <div class="services">
    <div class="services-title TTitleMedium">Удобства</div>
    <div class="services-items">
      <div class="services-items_li">
        <UiServiceItem icon="wifi" text="Скоростной интернет"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="coffee" text="Кофейня"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="parking" text="Парковка"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="printer" text="Принтер"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="namaz" text="Принтер"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="fruits" text="Фрукты и закуски"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="clouds" text="Развитое комьюнити"/>
      </div>
      <div class="services-items_li">
        <UiServiceItem icon="sun" text="Развитое комьюнити"/>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.group {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.gallery {
  max-width: 418px;

  .mainImg {
    width: 418px;
  }

  &-secondary {
    display: flex;
    justify-content: space-between;

    img {
      width: 31.333333%;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &-review {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
  }

  &-contacts {
    display: flex;
    gap: 32px;

    &-block {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &-socials {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  &-places {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: fit-content;

    &_item {
      display: flex;
      justify-content: space-between;
      gap: 24px;
    }
  }
}

.services {
  flex: 1;

  &-title {
    margin-bottom: 16px;
  }

  &-items {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    gap: 16px;

    &_li {
      justify-content: space-between;
      width: 45%;
    }
  }
}

</style>
