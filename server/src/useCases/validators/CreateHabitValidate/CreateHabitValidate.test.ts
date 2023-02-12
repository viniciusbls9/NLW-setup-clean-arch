import { describe, test, expect } from 'vitest'
import CreateHabitValidate from './CreateHabitValidate'

describe('CreateHabitValidate', () => {
    test('Should return title and weekDays if params are correct', () => {
        const params = {
            title: 'Create Habit',
            weekDays: [1,2,3]
        }

        const validate = new CreateHabitValidate(params)

        expect(validate.validate()).toEqual(params)
    })
})