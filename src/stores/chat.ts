import { acceptHMRUpdate, defineStore } from 'pinia'
import type Message from '~/models/Message'
import type Tag from '~/models/Tag'
// import type { RemovableRef } from '@vueuse/core'
// import { useLocalStorage } from '@vueuse/core'

export const useChatStore = defineStore('chat', () => {
  // The chat
  const chat = ref<(Message|Tag)[]>([])

  // Set the chat with the given value
  const setChat = (value: (Message|Tag)[]) => chat.value = value

  return {
    chat,
    setChat,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useChatStore, import.meta.hot))
