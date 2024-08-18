<template>
  <footer>
    <div class="container">
      <div class="footerContent">
        <div class="footerColumns">
          <div class="footerCol" v-for="col in columns">
            <div class="footerCol-header TTitleLarge">{{ col.title }}</div>
            <div class="footerCol-items">
              <div class="footerCol-item" v-for="item in col.children">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">© Коворкинги.ру, 2012 - 2024. Все права защищены. Политика обработки персональных
          данных
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  {
    title: 'Посетителям',
    children: [
      {
        title: 'Все коворкинги',
        link: ''
      },
      {
        title: 'Акции',
        link: ''
      },
      {
        title: 'События',
        link: ''
      },
      {
        title: 'Подробнее о смарт-офисах',
        link: ''
      }
    ]
  },
  {
    title: 'Владельцам коворкингов',
    children: [
      {
        title: 'Реклама',
        link: ''
      },
      {
        title: 'Новый коворкинг',
        link: ''
      },
      {
        title: 'Обновить инфо',
        link: ''
      }
    ]
  },
  {
    title: 'Инвесторам',
    children: [
      {
        title: 'Инвестировать в коворкинги',
        link: ''
      },
      {
        title: 'Владельцам недвижимости',
        link: ''
      }
    ]
  },
  {
    title: 'Контакты',
    children: [
      {
        title: '+7 (706) 415-36-05',
        link: ''
      },
      {
        title: 'iliasabaimain@gmail.com',
        link: ''
      }
    ]
  }

])
</script>

<style scoped lang="scss">
footer {
  background: #113951;
}

.footerContent {
  padding: 48px 0;
}

.footerColumns {
  display: flex;
  gap: 64px;
  justify-content: space-between;
  margin-bottom: 48px;
}

.footer {
  &-copyright {
    font-size: 12px;
    color: #cccccc;
    text-align: center;
  }
}

.footerCol {
  color: #fff;

  &-header {
    margin-bottom: 24px;
  }

  &-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &-item {
    font-size: 15px;
    cursor: pointer;
    transition: .3s ease;
    width: fit-content;

    &:hover {
      transition: .3s ease;
      color: #c7c7c7;
      text-decoration: underline;
    }
  }
}
</style>
