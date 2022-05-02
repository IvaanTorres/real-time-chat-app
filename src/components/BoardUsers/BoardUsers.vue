<script lang="ts" setup>
/* eslint-disable no-console */
import type Tag from '~/models/Tag'
import type User from '~/models/User'
import socket from '~/sockets/socket'
import { useChatStore } from '~/stores/chat'
import { useUserStore } from '~/stores/user'
import { events } from '~/enums'

// Use the chat store
const { chat } = useChatStore()
// Use the user store
const user = useUserStore()
// The users list
const users = ref<User[]>([])

/**
 * Set up the users list
 * @param {User[]} usersList - The users list
 */
socket.off(events.server.USERS).on(events.server.USERS, (usersList: User[]) => {
  users.value = usersList
})

/**
 * Add the user instance to the users list.
 * Add the created tag to the chat.
 *
 * @param {User} newUser - The tag object.
 */
socket.off(events.server.USER_CONNECTION).on(events.server.USER_CONNECTION, (newUser: User) => {
  const newTag: Tag = {
    _id: newUser.id,
    message: `The user ${newUser.username} has connected`,
  }
  // Add the user to the users list
  users.value.push(newUser)
  // Add the tag to the chat
  if (newUser.username !== user.name) chat.push(newTag)
})

/**
 * Remove the user instance to the users list.
 * Add the tag object to the chat.
 *
 * @param {User} userDisconnected - The disconnected user instance.
 */
socket.off(events.server.USER_DISCONNECTION).on(events.server.USER_DISCONNECTION, (userDisconnected: User) => {
  const newTag: Tag = {
    _id: userDisconnected.id,
    message: `The user ${userDisconnected.username} has disconnected`,
  }
  // Remove the user from the users list
  const indexToRemove = users.value.findIndex(user => user.id === userDisconnected.id)
  users.value.splice(indexToRemove, 1)
  if (userDisconnected.username !== user.name) chat.push(newTag)
})
</script>

<template>
  <div class="text-center">
    <h2>Users connected:</h2>
    <div v-if="!users.length">
      There are not users connected
    </div>
    <div v-for="_user in users" :key="_user.id">
      {{ _user.username }}
    </div>
  </div>
</template>
