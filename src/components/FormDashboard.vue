<script lang="ts" setup>
import type Message from '~/models/Message'
import socket from '~/sockets/socket'
import { useUserStore } from '~/stores/user'
import { events } from '~/enums'

// Use i18n
const { t } = useI18n()
// Use the user store
const user = useUserStore()
// The message body
const messageBody = ref<string>('')
// The input element
const messageInput = ref<HTMLInputElement>()

// Autofocus the input element to start typing
onMounted(() => {
  messageInput.value!.focus()
})
// Send the message when the user presses enter or click on the send button
const send = () => {
  const now = new Date()
  if (messageBody.value) {
    const message: Message = {
      user: user.name,
      body: messageBody.value,
      // TODO: See how to get the current date
      createdAt: now,
      updatedAt: now,
    }
    // Send the message to the server
    socket.emit(events.client.MESSAGE, message)
    // Reset the message body
    messageBody.value = ''
  }
}
</script>

<template>
  <form class="w-full flex justify-between gap-2 px-2" @submit.prevent="send">
    <input
      ref="messageInput"
      v-model="messageBody"
      role="message-input"
      class="w-full p-5 text-black bg-gray-300 rounded-full"
      dark="bg-gray-600 text-white"
      type="text"
      :placeholder="t('input.chat')"
    >
    <button
      class="flex justify-center items-center bg-purple-700 text-white min-w-10 px-4  rounded-full transition ease duration-200 hover:bg-purple-800"
      role="send-message-button"
    >
      <SendMessageIcon class="fill-white max-w-10 max-h-10" />
    </button>
  </form>
</template>
