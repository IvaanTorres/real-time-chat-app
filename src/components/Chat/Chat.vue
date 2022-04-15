<script lang="ts" setup>
/* eslint-disable no-console */
import type Message from '~/models/Message'
import socket from '~/sockets/socket'
import server from '~/utils/events.server'

const isLoading = ref<Boolean>(true)
const messagesList = ref<Message[]>([])

/**
 * Set the stored messages to the list of messages.
 * @param {Message} data - The stored message.
 */
socket.off(server.LOAD_MESSAGES).on(server.LOAD_MESSAGES, (data: Message[]) => {
  console.log('Messages loaded (response from the server)', data)
  // Set the stored messages to the list
  messagesList.value = data
  // Set the loading state to false
  isLoading.value = false
})

/**
 * Append the saved message received from the server
 * @param {Message} data - The stored message.
 */
socket.off(server.SAVED_MESSAGE).on(server.SAVED_MESSAGE, (data: Message) => {
  console.log('Message sent (response from the server)', data)
  // Append the message to the list after it has been stored
  messagesList.value = [...messagesList.value, data]
})
</script>

<template>
  <div>
    <Loader v-if="isLoading" />
    <div v-for="message in messagesList" :key="message._id">
      <Message :data="message" />
    </div>
  </div>
</template>
