<script lang="ts" setup>
/* eslint-disable no-console */
import socket from '~/sockets/socket'
import { useUserStore } from '~/stores/user'
import server from '~/utils/events.server'

// Use router
const router = useRouter()
// Use the user store
const user = useUserStore()

const username = ref(user.savedName)

/**
 * Connect to the socket when the component is mounted
 */
onMounted(() => {
  socket.connect()
})
/**
 * Go back to the login page and disconnect from the socket
 */
const logout = () => {
  socket.disconnect()
  socket.disconnected && router.push('/auth/login')
}
/**
 * Display the disconnection message received from the server
 * @param {string} reason -  The reason why the client has been disconnected.
 */
socket.off(server.DISCONNECT).on(server.DISCONNECT, (reason: string) => {
  console.log('Goodbye !')
  // Reconnect if the disconnection comes from the socket server
  if (reason === 'io server disconnect') socket.connect()
})
</script>

<template>
  <h2 sm="text-black mb-5" dark="text-white">
    Welcome {{ username }} !
  </h2>
  <div sm="w-full bg-gray-200 min-h-52" role="chat">
    <div sm="text-black" role="msg">
      <h3 sm="text-3xl mb-2">
        Messages
      </h3>
      <Chat />
    </div>
    <FormDashboard />
  </div>
  <button
    sm="bg-gray-700 mt-5 p-1 px-5 text-white"
    dark="bg-white text-black"
    @click="logout"
  >
    Logout
  </button>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
