import { acceptHMRUpdate, defineStore } from 'pinia'
// import type { RemovableRef } from '@vueuse/core'
// import { useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  // The user name
  // const name = ref<RemovableRef<string>>(useLocalStorage('userName', ''))
  const name = ref<string>('')
  // The user connection status
  // const isConnected = ref<RemovableRef<boolean>>(useLocalStorage('userConnectionStatus', false))
  const isConnected = ref<boolean>(false)

  // Reset the user state
  const reset = () => {
    name.value = ''
    isConnected.value = false
  }

  return {
    name,
    isConnected,
    reset,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
