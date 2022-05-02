<script lang="ts" setup>
import { convertLocale } from '~/utils/i18n/i18n'

const { availableLocales, t, locale } = useI18n()
const isOpen = ref<boolean>(false)

onMounted(() => { localStorage.setItem('preferredLocale', locale.value) })

const showDropDown = () => isOpen.value = true
const hideDropdown = () => isOpen.value = false
const toggleDropdown = () => isOpen.value = !isOpen.value

const changeLocale = (localeSelected: string) => {
  locale.value = localeSelected
  localStorage.setItem('preferredLocale', locale.value)
  hideDropdown()
}

</script>

<template>
  <div
    class="relative min-w-32 z-1"
    @mouseenter="showDropDown" @mouseleave="hideDropdown"
  >
    <div class="cursor-pointer" @click="toggleDropdown">
      <LangIcon class="inline w-8 mr-2" />
      <span class="font-medium" dark="text-white">{{ t('intl.title') }}</span>
    </div>
    <div v-if="isOpen" class="absolute w-full pt-2 shadow-xl">
      <div class="arrow-up dark:border-b-purple-200" />
      <div
        v-for="lang in availableLocales" :key="`locale-${lang}`"
        class="bg-white border border-gray-300 py-1 cursor-pointer text-center"
        dark="bg-purple-200 border-purple-300"
        hover="bg-purple-500 text-white"
        @click="changeLocale(lang)"
      >
        {{ convertLocale(lang) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow-up {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
  position: absolute;
  transform: translateY(-100%);
  right: calc(50% - 10px);
}
</style>
