<script setup lang="ts">
const router = useRouter()
const handleClick = () => router.push('/auth/login')
</script>

<template>
  <h1>Hello world</h1>
  <button sm="p-3 bg-gray-500 text-white" @click="handleClick">
    Go to login
  </button>
</template>
