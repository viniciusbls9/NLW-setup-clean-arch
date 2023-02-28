import { describe, test, expect } from 'vitest'
import UseCaseValidator from './UseCaseValidator'

describe('UseCaseValidator', () => {
  test('Should return title and weekDays if params are correct', () => {
    const params = {
      title: 'Create Habit',
      weekDays: [1, 2, 3]
    }

    const validate = new UseCaseValidator(params)

    expect(validate.createHabitValidator()).toEqual(params)
  })

  test('Should return date if params are correct', async () => {
    const params = { date: '2023-02-05T00:00:00.000Z' }

    const validate = new UseCaseValidator(params)
    
    expect(validate.getDayDetailsValidator()).toBeTypeOf('object')
  })

  test('Should return id if params are correct', async () => {
    const params = { id: '00880d75-a933-4fef-94ab-e05744435297' }

    const validate = new UseCaseValidator(params)
    
    expect(validate.toggleHabitValidator()).toBeTypeOf('string')
  })
})