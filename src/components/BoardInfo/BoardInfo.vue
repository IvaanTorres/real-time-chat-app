<script lang="ts" setup>
import { useUserStore } from '~/stores/user'

// Use the user store
const user = useUserStore()

</script>

<template>
  <div sm="flex justify-between bg-red-400">
    <p>Welcome - {{ user.name }}</p>
    <ConnectionStatus :is-connected="user.isConnected" />
  </div>
</template>
