import type Message from '~/models/Message'

export const message: Message = {
  _id: '1',
  body: 'Hello world',
  user: 'John Doe',
  createdAt: new Date(),
  updatedAt: new Date(),
}
