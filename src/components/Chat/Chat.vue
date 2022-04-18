<script lang="ts" setup>
import type Message from '~/models/Message'
import type Tag from '~/models/Tag'
import type User from '~/models/User'
import socket from '~/sockets/socket'
import { useChatStore } from '~/stores/chat'
import server from '~/utils/events.server'
import { firstToLast, isMessage, noMessages } from '~/utils/main/main'

// Use the chat store
const { chat, setChat } = useChatStore()
// The loading state
const isLoading = ref<Boolean>(true)

// Reset the chat when the chat is mounted
onMounted(() => {
  setChat([])
})

/**
 * Add the tag object of welcome to the chat.
 * @param {User} user - The user instance.
 */
socket.off(server.WELCOME).on(server.WELCOME, (user: User) => {
  const newTag: Tag = {
    _id: user.id,
    message: `Welcome ${user.username}`,
  }
  chat.push(newTag)
})

/**
 * Set the stored messages to the chat.
 * @param {Message[]} data - The stored messages.
 */
socket.off(server.LOAD_MESSAGES).on(server.LOAD_MESSAGES, (data: Message[]) => {
  // Set the stored messages to the list
  chat.push(...data)
  // Put the welcome message to the end of the chat
  firstToLast(chat)
  // Set the loading state to false
  isLoading.value = false
})

/**
 * Add the saved message to the chat.
 * @param {Message} data - The stored message.
 */
socket.off(server.SAVED_MESSAGE).on(server.SAVED_MESSAGE, (data: Message) => {
  if (!isLoading.value) {
    // Add the message to the chat after it has been stored
    chat.push(data)
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
