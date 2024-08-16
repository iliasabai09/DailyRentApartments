<template>
  <div>
    <div class="navigationWrapper">
      <div class="container">
        <div class="navigationBasic">
          <div class="navigation">
            <div
                :style="{color:idx === selectedIdx ? '#fff' : '#000'}"
                class="USpacer UTextCenter UPointer TSubTitle link"
                v-for="(link,idx) in links"
                @click="selectNavigation(idx)"
            >
              {{ link.title }}
            </div>
          </div>
          <div class="selectedNavigation" :style="{left: selectedIdx * 20 + '%'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const selectedIdx = ref(0)

const links = ref([
  {
    title: 'Аренда оффисов',
    link: '/offices'
  },
  {
    title: 'Коворкинги',
    link: '/coworkings'
  },
  {
    title: 'Реклама',
    link: ''
  },
  {
    title: 'Новости',
    link: ''
  },
  {
    title: 'Конслайтинг',
    link: ''
  }
])

function selectNavigation(idx) {
  selectedIdx.value = idx
}

onMounted(() => {
})

</script>

<style scoped lang="scss">
.navigationWrapper {
  background-color: var(--ligh-bg);
}

.navigationBasic {
  position: relative;
}

.link {
  position: relative;
  z-index: 2;
  transition: .3s ease;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
}

.selectedNavigation {
  background: rgb(7,0,131);
  background: linear-gradient(90deg, rgba(7,0,131,1) 0%, rgba(9,9,121,1) 35%, rgba(0,205,199,1) 100%);
  height: 40px;
  border-radius: 16px;
  position: absolute;
  z-index: 1;
  width: 20%;
  top: 50%;
  transform: translateY(-50%);
  transition: .3s ease;
}
</style>
