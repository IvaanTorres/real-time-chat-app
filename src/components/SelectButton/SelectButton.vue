<script lang="ts" setup>
import { convertLocale } from '~/utils/i18n/i18n'

const { availableLocales, t, locale } = useI18n()
const onHover = ref<boolean>(false)

onMounted(() => { localStorage.setItem('preferredLocale', locale.value) })

const showDropDown = () => onHover.value = true
const hideDropdown = () => onHover.value = false

const changeLocale = (localeSelected: string) => {
  locale.value = localeSelected
  localStorage.setItem('preferredLocale', locale.value)
  hideDropdown()
}

</script>

<template>
  <div class="relative min-w-32" @mouseenter="showDropDown" @mouseleave="hideDropdown">
    <button>
      <img class="w-7 inline mr-2" src="https://img.icons8.com/ios/50/000000/translation.png">
      {{ t('intl.title') }}
    </button>
    <div v-if="onHover" class="absolute w-full pt-5 shadow-xl">
      <div
        v-for="lang in availableLocales" :key="`locale-${lang}`"
        class="bg-gray-100 border border-gray-300 py-1 cursor-pointer"
        hover="bg-purple-500 text-white"
        @click="changeLocale(lang)"
      >
        {{ convertLocale(lang) }}
      </div>
    </div>
  </div>
</template>
