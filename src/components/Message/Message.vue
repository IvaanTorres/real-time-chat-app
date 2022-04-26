<script lang="ts" setup>
import type { PropType } from 'vue'
import type Message from '~/models/Message'
import { useUserStore } from '~/stores/user'
import { getDate, getTime } from '~/utils/main/main'

const props = defineProps({
  data: {
    type: Object as PropType<Message>,
    required: true,
  },
})

// Use the user store
const user = useUserStore()

// Check if the message is from the user and style it accordingly
const isMyMessage = () => props.data.user === user.name ? 'text-right' : 'text-left'

</script>

<template>
  <div :class="isMyMessage()">
    {{ props.data.user }}: {{ props.data.body }} ({{ getDate(props.data.createdAt, '/') }} - {{ getTime(props.data.createdAt, ':') }})
  </div>
</template>
