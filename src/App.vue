<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Thunder Link',
  meta: [
    { name: 'description', content: 'A professional real time chat app' },
  ],
})
</script>

<template>
  <router-view />
</template>
