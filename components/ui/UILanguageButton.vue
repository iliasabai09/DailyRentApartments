<template>
  <button id="language-button">
    <LIcon :icon="'translate'" color="var(--primary)" scale="25"/>
    <span class="TMiddleMedium">{{ currentLanguage.title }}</span>
  </button>
  <LMenu :list="languages" :activator="'#language-button'" @select="selectLanguage($event)"/>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  currentLocale: {
    type: String,
    default: 'ru',
    required: false
  }
})

const currentLocale = ref(props.currentLocale)
const languages = ref([
  {
    title: 'Русский',
    value: 'ru'
  },
  {
    title: 'Казахский',
    value: 'kz'
  }
])

function selectLanguage(locale) {
  currentLocale.value = locale
  emits('selectLanguage', locale)
}

const currentLanguage = computed(() => languages.value.find(lng => lng.value === currentLocale.value))

const emits = defineEmits(['selectLanguage'])
</script>

<style scoped lang="scss">
button {
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .4s ease;
  padding: 0 16px;
  border-radius: 16px;
  height: 40px;
  gap: 4px;
  color: var(--primary);
  //@media (max-width: 768px) {
  //  border-radius: 50%;
  //  padding: 0;
  //  justify-content: center;
  //  min-width: 40px;
  //  height: 40px;
  //}

  &:hover {
    background-color: var(--hover-btn);
  }
}
</style>
