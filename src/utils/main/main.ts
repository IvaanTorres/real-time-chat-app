/* eslint-disable no-console */
import type Message from '~/models/Message'
import type Tag from '~/models/Tag'

/**
 * Converts a date to a string and then  it converts it again to a date object.
 * This is done to ensure that the date object is in the correct timezone (the client one).
 * @param {Date} date - The date.
 * @returns {Date} - The date in Date format.
 */
export const toDate = (date: Date): Date => new Date(date.toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }))

/**
 * Add a preffix to some value in case it has less than 2 digits.
 * @param {number|string} value - The value to add the preffix.
 * @returns {string} The preffix.
 */
export const addPreffix = (value: number|string, preffix: string): string => {
  if (typeof value === 'number') return value.toString().padStart(2, '0')
  return value.padStart(2, preffix)
}

/**
 * Get the date in the format: DD/MM/YYYY
 * @param {Date} date - The date.
 * @param {string} separator - The separator between the values of the date.
 * @returns {string} The date formatted.
 */
export const getDate = (date: Date, separator: string): string => {
  date = toDate(date)
  return `${addPreffix(date.getDate(), '0')}${separator}${addPreffix(date.getMonth() + 1, '0')}${separator}${addPreffix(date.getFullYear(), '0')}`
}

/**
 * Get the time in the format: HH:MM
 * @param {Date} date - The date.
 * @param {string} separator - The separator between the values of the time.
 * @returns {string} The time formatted.
 */
export const getTime = (date: Date, separator: string): string => {
  date = toDate(date) // TODO: Set the spanish timezone. The time changes alone
  return `${addPreffix(date.getHours(), '0')}${separator}${addPreffix(date.getMinutes(), '0')}`
}

/**
 * Check if the object is a message.
 * @param {any} obj - The object to check if it is a message.
 * @returns {boolean} - True if the object is a message.
 */
export const isMessage = (obj: any): obj is Message => {
  return 'user' in obj && 'body' in obj && 'createdAt' in obj && 'updatedAt' in obj
}

/**
 * Check if the chat has no messages to display.
 * @param isLoading - The loading state.
 * @param chat - The chat.
 * @returns {boolean} - True if the chat has no messages.
 */
export const noMessages = (isLoading: Boolean, chat: (Message|Tag)[]) => {
  return !isLoading && chat.length <= 1
}

/**
 * Put the first item of the array to the last position.
 * @param arr - The array to check.
 */
export const firstToLast = (arr: Array<any>) => {
  const first = arr[0]
  arr.shift()
  arr.push(first)
}

export const uuid = (): string => {
  return 'xxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
