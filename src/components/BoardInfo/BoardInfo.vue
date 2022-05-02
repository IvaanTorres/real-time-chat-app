<script lang="ts" setup>
import { useUserStore } from '~/stores/user'

// Use the user store
const user = useUserStore()

</script>

<template>
  <div
    class="flex justify-between w-full bg-white text-black py-1 px-2 rounded-lg mb-5"
    dark="bg-purple-200"
  >
    <p role="username">
      {{ user.name }}
    </p>
    <ConnectionStatus :is-connected="user.isConnected" />
  </div>
</template>
