<script lang="ts" setup>
import { layouts } from '~/enums'
const router = useRouter()

const layout = router.currentRoute.value.meta.layout
</script>

<template>
  <nav
    class="flex justify-between items-center mx-5 z-1 mb-7 mt-2"
    md="mx-15 mb-10"
  >
    <SwitchButton />
    <SelectButton v-if="layout === layouts.AUTH" />
  </nav>
</template>
