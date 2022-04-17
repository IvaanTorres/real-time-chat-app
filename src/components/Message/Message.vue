<script lang="ts" setup>
/* eslint-disable no-console */
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

const username = ref(user.name)

const isMyMessage = () => props.data.user === username.value ? 'text-right' : 'text-left'
</script>

<template>
  <div :class="isMyMessage()">
    {{ props.data.user }}: {{ props.data.body }} ({{ getDate(props.data.createdAt, '/') }} - {{ getTime(props.data.createdAt, ':') }})
  </div>
</template>
