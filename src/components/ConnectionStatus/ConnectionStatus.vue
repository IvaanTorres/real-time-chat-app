<script lang="ts" setup>
const props = defineProps({
  isConnected: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div sm="relative">
    <span class="rounded-full w-5 h-5 absolute top-1/2 right-0 -translate-y-1/2" :sm="props.isConnected ? 'bg-green-500' : 'bg-red-500'" />
    <p sm="mr-6">
      {{ props.isConnected ? 'Connected' : 'Disconnected' }}
    </p>
  </div>
</template>
