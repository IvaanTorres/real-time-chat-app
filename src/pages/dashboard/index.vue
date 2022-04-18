<script lang="ts" setup>
import socket from '~/sockets/socket'
import { useUserStore } from '~/stores/user'
import server from '~/utils/events.server'

// Use router
const router = useRouter()
// Use the user store
const user = useUserStore()

// Connect when the component is mounted
onMounted(() => {
  socket.connect()
})

/**
 * Go back to the login page and disconnect from the socket
 */
const logout = () => {
  router.push('/auth/login')
  socket.disconnect()
  user.reset()
}

/**
 * If there is a connection error, go to the login page and disconnect
 * @param {Error} err - The error object
 */
socket.on('connect_error', (err: Error) => {
  if (err.message === 'Invalid username') console.error(err.message)
  logout()
})

/**
 * Set the user connection state to true
 */
socket.off(server.CONNECT).on(server.CONNECT, () => {
  user.isConnected = true
})

/**
 * Display the disconnection message received from the server
 * @param {string} reason -  The reason why the client has been disconnected.
 */
socket.off(server.DISCONNECT).on(server.DISCONNECT, (reason: string) => {
  router.push('/auth/login')
  user.reset()
  // Reconnect if the disconnection comes from the socket server
  if (reason === 'io server disconnect') socket.connect()
})
</script>

<template>
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
  layout: dashboard
</route>
