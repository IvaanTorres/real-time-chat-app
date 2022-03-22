import { io } from 'socket.io-client'
import { VITE_API_PORT, VITE_API_URL } from '../config'

const test = 'api-thunder-link.herokuapp.com'
const URL = test.includes('localhost') ? `${VITE_API_URL}:${VITE_API_PORT}` : `${VITE_API_URL}` // TODO: Set ENV variable
// eslint-disable-next-line no-console
console.log(URL)
const socket = io(URL, { autoConnect: false })

socket.onAny((event, ...args) => {
  // eslint-disable-next-line no-console
  console.log(event, args)
})

export default socket
