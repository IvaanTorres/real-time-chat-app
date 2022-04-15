// Interface for the Message model
export default interface Message {
  _id?: string
  user: string
  body: string
  createdAt: Date
  updatedAt: Date
}
