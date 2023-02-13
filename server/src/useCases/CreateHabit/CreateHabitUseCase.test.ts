import HabitsMemoryRepository from "infra/repository/HabitsMemoryRepository";
import { describe, test, expect } from "vitest";
import { ZodError } from "zod";
import { CreateHabitUseCase } from "./CreateHabitUseCase";


describe('AddHabits', () => {
  test('should call AddHabits.execute and create new habits', async () => {
    const createMemoryHabit = new HabitsMemoryRepository()
    const createHabit = new CreateHabitUseCase(createMemoryHabit)
    const habitData = {
      title: 'Beber 2L de água', weekDays: [1, 3, 5]
    }

    const response = await createHabit.execute(habitData)

    expect(response).toBe('Great! Habit created with success')
  })

  test('should call AddHabits.execute with wrong params and should not create new habits', async () => {
    const createMemoryHabit = new HabitsMemoryRepository()
    const createHabit = new CreateHabitUseCase(createMemoryHabit)
    const habitData = {
      title: '', weekDays: [1, 3, 5]
    }

    const response = await createHabit.execute(habitData)

    expect(response).toBeInstanceOf(ZodError)
  })
})