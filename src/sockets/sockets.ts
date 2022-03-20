import { io } from 'socket.io-client'

const URL = 'http://localhost:3000' // TODO: Set ENV variable
const socket = io(URL, { autoConnect: false })

socket.onAny((event, ...args) => {
  // eslint-disable-next-line no-console
  console.log(event, args)
})

export default socket
