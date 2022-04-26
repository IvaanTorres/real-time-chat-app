import { addPreffix, firstToLast, getDate, getTime, isMessage, noMessages, toDate } from './main'
import type Message from '~/models/Message'
import type Tag from '~/models/Tag'

describe('main utils', () => {
  describe('should get formatted local date from date', () => {
    test('less than 10', () => {
      const date = new Date('2020-01-01T00:00:00.000Z')
      const formattedDate = getDate(date, '/')
      expect(formattedDate).toBe('01/01/2020')
    })
    test('equal than 10', () => {
      const date = new Date('2020-10-10T00:00:00.000Z')
      const formattedDate = getDate(date, '/')
      expect(formattedDate).toBe('10/10/2020')
    })
    test('more than 10', () => {
      const date = new Date('2020-11-11T00:00:00.000Z')
      const formattedDate = getDate(date, '/')
      expect(formattedDate).toBe('11/11/2020')
    })
  })

  describe.todo('should get formatted local time from date', () => {
    test('less than 10', () => {
      const date = new Date('2020-01-01T01:01:01.000Z')
      const formattedTime = getTime(date, ':')
      expect(formattedTime).toBe('01:01')
    })
    test('equal than 10', () => {
      const date = new Date('2020-10-10T10:10:10.000Z')
      const formattedTime = getTime(date, ':')
      expect(formattedTime).toBe('10:10')
    })
    test('more than 10', () => {
      const date = new Date('2020-11-11T11:11:11.000Z')
      const formattedTime = getTime(date, ':')
      expect(formattedTime).toBe('11:11')
    })
  })

  describe('should add preffix to some value in case it has less than 2 digits', () => {
    describe('It\'s a number', () => {
      test('less than 2 digits', () => {
        const value = 1
        const preffix = '0'
        const formattedValue = addPreffix(value, preffix)
        expect(formattedValue).toBe('01')
      })
      test('equal than 2 digits', () => {
        const value = 10
        const preffix = '0'
        const formattedValue = addPreffix(value, preffix)
        expect(formattedValue).toBe('10')
      })
      test('more than 2 digits', () => {
        const value = 11
        const preffix = '0'
        const formattedValue = addPreffix(value, preffix)
        expect(formattedValue).toBe('11')
      })
    })
    describe('It\'s a string', () => {
      test('less than 2 chars', () => {
        const value = 'h'
        const preffix = '+'
        const formattedValue = addPreffix(value, preffix)
        expect(formattedValue).toBe('+h')
      })
      test('equal than 2 chars', () => {
        const value = 'hi'
        const preffix = '+'
        const formattedValue = addPreffix(value, preffix)
        expect(formattedValue).toBe('hi')
      })
      test('more than 2 chars', () => {
        const value = 'Hello World'
        const preffix = '+'
        const formattedValue = addPreffix(value, preffix)
        expect(formattedValue).toBe('Hello World')
      })
    })
  })

  describe('should get the first element of an array', () => {
    test('array with one element', () => {
      const array = ['Hello']
      firstToLast(array)
      expect(array).toStrictEqual(['Hello'])
    })
    test('array with two elements', () => {
      const array = ['Hello', 'World']
      firstToLast(array)
      expect(array).toStrictEqual(['World', 'Hello'])
    })
  })

  describe('should check if the object is an instance of Message', () => {
    test('It\'s an instance of Message', () => {
      const message = {
        _id: '1',
        user: 'John Doe',
        body: 'Hello world',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      expect(isMessage(message)).toBe(true)
    })
    test('It\'s not an instance of Message', () => {
      const message = {
        _id: '1',
        message: 'Hello world',
        createdAt: new Date(),
      }
      expect(isMessage(message)).toBe(false)
    })
  })

  describe('should check if the messages list is empty', () => {
    test('It\'s empty', () => {
      const messages: (Message|Tag)[] = []
      expect(noMessages(false, messages)).toBe(true)
    })
    test('It\'s not empty', () => {
      const messages: (Message|Tag)[] = [{
        _id: '1',
        user: 'John Doe',
        body: 'Hello world',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '2',
        message: 'Hello world',
      }]
      expect(noMessages(false, messages)).toBe(false)
    })
  })

  describe('should convert a date to a another date with the timezone set', () => {
    test('spanish timezone', () => {
      const date = new Date('2020-01-01T10:00:00.000Z')
      const convertedDate = toDate(date)

      expect(convertedDate.getUTCHours()).toBe(10)
      expect(convertedDate.getUTCMinutes()).toBe(0)
    })
  })
})
