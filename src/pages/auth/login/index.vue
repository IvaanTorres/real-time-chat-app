
<script lang="ts" setup>
import { useUserStore } from '~/stores/user'
const router = useRouter()
const user = useUserStore()

const go = () => router.push('/dashboard/')
</script>

<template>
  <div sm="bg-gray-700 p-5" dark="bg-gray-300">
    <h1 sm="text-white text-center font-bold text-5xl" dark="text-black">
      Login
    </h1>
    <br>
    <label sm="text-white" dark="text-black" for="user">User:</label><br>
    <input id="user" v-model="user.savedName" sm="text-black p-1" type="text" name="user" @keydown.enter="go"><br>
    <input sm="bg-white mt-5 px-5 text-black" type="submit" value="Login" @click="go">
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
