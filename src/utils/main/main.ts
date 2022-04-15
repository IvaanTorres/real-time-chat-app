/**
 * Converts a date to a string and then  it converts it again to a date object.
 * This is done to ensure that the date object is in the correct timezone (the client one).
 * @param {Date} date - The date.
 * @returns {Date} - The date in Date format.
 */
export const toDate = (date: Date): Date => new Date(date.toLocaleString())

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
  date = toDate(date)
  return `${addPreffix(date.getHours(), '0')}${separator}${addPreffix(date.getMinutes(), '0')}`
}
