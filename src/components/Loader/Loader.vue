<script lang="ts" setup>
// Use i18n
const { t } = useI18n()
</script>

<template>
  <div>
    <p role="loader" class="text-center">
      {{ t('text.chat.loading') }}
    </p>
  </div>
</template>
