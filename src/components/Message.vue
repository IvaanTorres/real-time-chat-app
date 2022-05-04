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
const isMyMessage = () => props.data.user === user.name

</script>

<template>
  <div
    class="block"
    :class="isMyMessage() ? 'ml-auto' : 'mr-auto'"
    role="message"
  >
    <div
      role="message-body"
      class="px-10 py-3 rounded-full border-2 drop-shadow-xl shadow-black"
      :class="isMyMessage()
        ? 'rounded-br-none bg-purple-700 text-white border-purple-900'
        : 'rounded-bl-none bg-gray-100 text-black border-gray-300 dark:bg-gray-50'"
    >
      {{ props.data.body }}
    </div>
    <div
      role="message-info"
      class="text-xs mt-1"
      :class="isMyMessage() ? 'text-right' : 'text-left'"
    >
      {{ props.data.user }} - {{ getDate(props.data.createdAt, '/') }} ({{ getTime(props.data.createdAt, ':') }})
    </div>
  </div>
</template>
