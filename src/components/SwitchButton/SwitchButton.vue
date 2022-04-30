<script lang="ts" setup>
import { isDark, toggleDark } from '~/composables'

const switchClasses = ref<string>('')

const switchTheme = () => {
  if (isDark.value)
    switchClasses.value = 'bg-gray-700 translate-x-full'
  else
    switchClasses.value = 'bg-yellow-500 -translate-x-2'
}

const toggleTheme = () => {
  toggleDark()
  switchTheme()
}

onMounted(() => {
  switchTheme()
})
</script>

<template>
  <button
    class="w-12 h-5 md:w-12 md:h-6 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow"
    @click="toggleTheme()"
  >
    <div
      :class="switchClasses"
      class="w-7 h-7 relative rounded-full transition duration-500 transform bg-purple-900 -translate-x-2 p-1 text-white"
    >
      <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
  </button>
</template>
