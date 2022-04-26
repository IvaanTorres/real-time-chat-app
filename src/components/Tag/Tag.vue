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
  <div>
    <p sm="text-center">
      {{ props.data.message }}
    </p>
  </div>
</template>
