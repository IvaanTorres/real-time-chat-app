<script lang="ts" setup>
import type { PropType } from 'vue'
import type Tag from '~/models/Tag'

const props = defineProps({
  data: {
    type: Object as PropType<Tag>,
    required: true,
  },
})

</script>

<template>
  <div
    md="w-auto"
    class="m-auto block w-full"
  >
    <div
      class="flex justify-between items-center gap-10 text-center bg-dark-300 text-white py-2 px-10"
    >
      <span>-</span>
      <p role="tag-message">
        {{ props.data.message }}
      </p>
      <span>-</span>
    </div>
  </div>
</template>
