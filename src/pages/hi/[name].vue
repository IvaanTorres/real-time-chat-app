<script lang="ts" setup>
const router = useRouter()
const props = defineProps<{ name: string }>()
const name = ref(props.name)
const msg = 'There\'s no messages for the moment'
const logout = () => router.back()
</script>

<template>
  <h2 sm="text-black mb-5" dark="text-white">
    Welcome: {{ name }}
  </h2>
  <div sm="flex justify-between flex-col w-full bg-gray-200 min-h-52" role="chat">
    <div sm="text-black" role="msg">
      <h3 sm="text-3xl mb-2">
        Messages
      </h3>
      <div>
        {{ msg }}
      </div>
    </div>
    <input sm="p-5 text-black bg-gray-300" dark="bg-gray-400" type="text">
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
  layout: auth
</route>
