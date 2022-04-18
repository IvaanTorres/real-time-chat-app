<script lang="ts" setup>
import type Message from '~/models/Message'
import socket from '~/sockets/socket'
import { useUserStore } from '~/stores/user'
import client from '~/utils/events.client'

// Use the user store
const user = useUserStore()
// The message body
const messageBody = ref<string>('')
// The input element
const messageInput = ref<HTMLInputElement>()

// Autofocus the input element to start typing
onMounted(() => messageInput.value!.focus())

// Send the message when the user presses enter or click on the send button
const send = () => {
  if (messageBody.value) {
    const message: Message = {
      user: user.name,
      body: messageBody.value,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    // Send the message to the server
    socket.emit(client.MESSAGE, message)
    // Reset the message body
    messageBody.value = ''
  }
}
</script>

<template>
  <form sm="w-full flex" @submit.prevent="send">
    <input
      ref="messageInput"
      v-model="messageBody"
      sm="w-full p-5 text-black bg-gray-300"
      dark="bg-gray-600 text-white"
      type="text"
      placeholder="Type your message here"
    >
    <button
      sm="bg-red-500 text-black min-w-30 hover:bg-red-700"
    >
      Send
    </button>
  </form>
</template>
