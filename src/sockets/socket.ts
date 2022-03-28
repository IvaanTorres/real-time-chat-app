/* eslint-disable no-console */
import { io } from 'socket.io-client'
import { VITE_API_PORT, VITE_API_URL } from '../config'

// Sockets API URL
const URL = VITE_API_URL.includes('localhost') ? `${VITE_API_URL}:${VITE_API_PORT}` : `${VITE_API_URL}`

// Socket connection
const socket = io(URL, { autoConnect: false })
console.log('Connected to', URL)
console.log('MODE: ', import.meta.env.MODE)

// Event listener on any emit
socket.onAny((event, ...args) => {
  console.log(event, args)
})

export default socket
