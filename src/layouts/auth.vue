<script lang="ts" setup>
// use the dark mode
import { toggleDark } from '~/composables/dark'
</script>

<template>
  <main class="px-4 py-10 text-gray-700 dark:text-gray-200">
    <button
      sm="bg-gray-700 text-white border-2 p-3 mb-3 border-black"
      dark="bg-white text-black border-white"
      @click="toggleDark()"
    >
      Switch light/dark mode
    </button>
    <router-view />
  </main>
</template>
