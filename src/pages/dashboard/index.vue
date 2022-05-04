<script lang="ts" setup>
import socket from '~/sockets/socket'
import { useUserStore } from '~/stores/user'
import { events, routes } from '~/enums'

// Use i18n
const { t } = useI18n()
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
  socket.disconnect()
  user.reset()
  router.push(routes.LOGIN)
}

/**
 * If there is a connection error, go to the login page and disconnect
 * @param {Error} err - The error object
 */
socket.on(events.server.CONNECT_ERROR, (err: Error) => {
  if (err.message === 'Invalid username') console.error(err.message)
  logout()
})

/**
 * Set the user connection state to true
 */
socket.off(events.server.CONNECT).on(events.server.CONNECT, () => {
  user.isConnected = true
})

/**
 * Display the disconnection message received from the server
 * @param {string} reason -  The reason why the client has been disconnected.
 */
socket.off(events.server.DISCONNECT).on(events.server.DISCONNECT, (reason: string) => {
  router.push(routes.LOGIN)
  user.reset()
  // Reconnect if the disconnection comes from the socket server
  if (reason === 'io server disconnect') socket.connect()
})
</script>

<template>
  <div
    class="flex flex-col-reverse gap-5 w-auto min-h-52"
    lg="mx-15 flex-row gap-20" role="chat"
  >
    <div
      class="w-full bg-dark-300 text-white p-3 rounded-lg drop-shadow-2xl"
      lg="w-1/3"
      role="connectionInfo"
    >
      <BoardInfo />
      <BoardUsers />
      <!-- Logout button -->
      <button
        class="bg-purple-700 m-auto block mt-5 p-1 px-5 text-white rounded-full hover:bg-purple-800"
        dark="bg-purple-200 text-black transition ease duration-200 hover:bg-purple-500 hover:text-white"
        @click="logout"
      >
        {{ t('button.logout') }}
      </button>
    </div>
    <div
      class="w-full text-black bg-white rounded-lg py-2 pt-5 pb-3 drop-shadow-2xl"
      dark="bg-purple-200"
      role="chat"
    >
      <h3 class="text-3xl text-center pb-10 px-2" style="box-shadow: 0 5px 5px -5px #333;">
        <!-- TODO: Make it reactive -->
        {{ t('title.chat') }}
      </h3>
      <Chat />
      <FormDashboard />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
