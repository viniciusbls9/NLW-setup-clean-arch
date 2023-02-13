import { describe, test, expect } from 'vitest'
import UseCaseValidator from './UseCaseValidator'

describe('UseCaseValidator', () => {
    test('Should return title and weekDays if params are correct', () => {
        const params = {
            title: 'Create Habit',
            weekDays: [1,2,3]
        }

        const validate = new UseCaseValidator(params)

        expect(validate.createHabitValidator()).toEqual(params)
    })
})