<script lang="ts" setup>
import type Message from '~/models/Message'
import type Tag from '~/models/Tag'
import socket from '~/sockets/socket'
import server from '~/utils/events.server'
import { firstToLast, isMessage, noMessages } from '~/utils/main/main'

const isLoading = ref<Boolean>(true)
const chat = ref<(Message|Tag)[]>([])

/**
 * Add the tag object of welcome to the chat.
 * @param {Tag} data - The tag object.
 */
socket.off(server.WELCOME).on(server.WELCOME, (data: Tag) => {
  chat.value.push(data)
})

/**
 * Add the tag object of new user connection to the chat.
 * @param {Tag} data - The tag object.
 */
socket.off(server.USER_CONNECTION).on(server.USER_CONNECTION, (data: Tag) => {
  chat.value.push(data)
})
/**
 * Add the tag object of user disconnection to the chat.
 * @param {string} data - The tag object.
 */
socket.off(server.USER_DISCONNECTION).on(server.USER_DISCONNECTION, (data: Tag) => {
  chat.value.push(data)
})

/**
 * Set the stored messages to the chat.
 * @param {Message[]} data - The stored messages.
 */
socket.off(server.LOAD_MESSAGES).on(server.LOAD_MESSAGES, (data: Message[]) => {
  // Set the stored messages to the list
  chat.value.push(...data)
  // Put the welcome message to the end of the chat
  firstToLast(chat.value)
  // Set the loading state to false
  isLoading.value = false
})

/**
 * Append the saved message received from the server
 * @param {Message} data - The stored message.
 */
socket.off(server.SAVED_MESSAGE).on(server.SAVED_MESSAGE, (data: Message) => {
  if (!isLoading.value) {
    // Add the message to the chat after it has been stored
    chat.value.push(data)
  }
})
</script>

<template>
  <div>
    <p v-if="noMessages(isLoading, chat)">
      There's no messages for the moment
    </p>
    <Loader v-if="isLoading" />
    <div v-for="message in chat" :key="message._id">
      <Message v-if="isMessage(message)" :data="message" />
      <Tag v-else :data="message" />
    </div>
  </div>
</template>
