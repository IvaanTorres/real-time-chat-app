
<script lang="ts" setup>
import socket from '~/sockets/socket'
import { useUserStore } from '~/stores/user'
// Use router
const router = useRouter()
// Use the user store
const user = useUserStore()
// The reactive username
const username = ref<string>('')
// Redirect to the dashboard, setting the auth values
const go = () => {
  if (username.value) {
    user.name = username.value
    socket.auth = { username: user.name }
    router.push('/dashboard')
  }
}
</script>

<template>
  <div sm="bg-gray-700 p-5" dark="bg-gray-300">
    <h1 sm="text-white text-center font-bold text-5xl" dark="text-black">
      Login
    </h1>
    <br>
    <label sm="text-white" dark="text-black" for="user">User:</label><br>
    <input id="user" v-model="username" sm="text-black p-1" type="text" name="user" @keydown.enter="go"><br>
    <button sm="bg-white mt-5 px-5 text-black" @click="go">
      Login
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
