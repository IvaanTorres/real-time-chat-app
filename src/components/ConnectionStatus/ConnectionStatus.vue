<script lang="ts" setup>
const props = defineProps({
  isConnected: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="relative">
    <span class="rounded-full w-5 h-5 absolute top-1/2 right-0 -translate-y-1/2" :class="props.isConnected ? 'bg-green-500' : 'bg-red-500'" />
    <p class="mr-6" role="status">
      {{ props.isConnected ? 'Online' : 'Offline' }}
    </p>
  </div>
</template>
