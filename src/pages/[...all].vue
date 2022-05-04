<script lang="ts" setup>
import { routes } from '~/enums'
const { t } = useI18n()
const router = useRouter()

const goToLogin = () => {
  router.push(routes.LOGIN)
}
</script>

<template>
  <div
    class="mt-20" md="mt-0"
  >
    <div class="text-center text-9xl mb-5" dark="text-white">
      404
    </div>
    <h2 class="text-center text-4xl mb-20" dark="text-white">
      {{ t('text.not-found') }}
    </h2>
    <div class="text-center">
      <button
        class="bg-purple-700 text-white ease duration-200 px-10 py-3 rounded-full hover:bg-purple-800"
        dark="bg-purple-300 text-black hover:bg-purple-400"
        @click="goToLogin"
      >
        {{ t('text.redirection.login') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
