import { acceptHMRUpdate, defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  // The user name
  const name = ref<RemovableRef<string>>(useLocalStorage('userName', ''))
  // The user connection status
  const isConnected = ref<RemovableRef<boolean>>(useLocalStorage('userConnectionStatus', false))

  return {
    name,
    isConnected,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
