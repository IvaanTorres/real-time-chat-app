<script lang="ts" setup>
const props = defineProps({
  isConnected: {
    type: Boolean,
    required: true,
  },
})
// Use i18n
const { t } = useI18n()

</script>

<template>
  <div class="relative">
    <span class="rounded-full w-5 h-5 absolute top-1/2 right-0 -translate-y-1/2" :class="props.isConnected ? 'bg-green-500' : 'bg-red-500'" />
    <p class="mr-6" role="status">
      {{ props.isConnected ? t('text.status.online') : t('text.status.offline') }}
    </p>
  </div>
</template>
