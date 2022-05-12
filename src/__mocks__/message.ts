import { externalUser, user } from './user'
import type Message from '~/models/Message'
import { uuid } from '~/utils/main/main'

export const message: Message = {
  _id: uuid(),
  body: 'This is a test message',
  user: user.username,
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const externalMessage: Message = {
  _id: uuid(),
  body: 'This is a external test message',
  user: externalUser.username,
  createdAt: new Date(),
  updatedAt: new Date(),
}
