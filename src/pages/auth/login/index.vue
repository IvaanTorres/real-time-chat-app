
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
  <div
    class="block m-auto bg-white p-5 drop-shadow-xl rounded-xl z-0"
    md="max-w-full mx-15"
    lg="max-w-xl h-auto mx-auto"
    dark="bg-purple-200"
  >
    <h2 class="text-center font-bold text-5xl mb-10" dark="text-black">
      Log in
    </h2>
    <div class="block m-auto w-full">
      <input
        id="user" v-model="username"
        class="w-50 m-auto block rounded-xl shadow-inner border border-gray-200 border-width-2 p-2 px-4 mb-6"
        dark="bg-gray-100 border-gray-400"
        placeholder="Type your username"
        sm="text-black" type="text" name="user" @keydown.enter="go"
      >
      <button
        class="w-50 transition ease-in-out delay-500 m-auto block bg-gradient-to-r from-purple-500 to-purple-700 rounded-full px-15 py-3 text-white font-semibold"
        dark="bg-purple-900"
        hover="from-purple-700 to-purple-900"
        @click="go"
      >
        Login
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
