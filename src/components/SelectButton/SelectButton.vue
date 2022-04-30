<script lang="ts" setup>
const { availableLocales, t, locale } = useI18n()
const onHover = ref<boolean>(false)

const showDropDown = () => onHover.value = true
const hideDropDown = () => onHover.value = false

const changeLocale = (localeSelected: string) => {
  locale.value = localeSelected
  hideDropDown()
}
</script>

<template>
  <div class="relative min-w-32" @mouseenter="showDropDown" @mouseleave="hideDropDown">
    <button>
      {{ t('button.home') }}
    </button>
    <div v-if="onHover" class="absolute w-full pt-5 shadow-xl">
      <div
        v-for="lang in availableLocales" :key="`locale-${lang}`"
        class="bg-gray-100 border border-gray-300 py-1 cursor-pointer"
        hover="bg-purple-500 text-white"
        @click="changeLocale(lang)"
      >
        {{ lang }}
      </div>
    </div>
  </div>
</template>
