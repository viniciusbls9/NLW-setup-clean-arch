import { describe, test, expect } from "vitest";
import HabitsMemoryRepository, { mockHabits } from "./HabitsMemoryRepository";

describe('Habits Repository test', () => {
  test('should call findAll method and returns all habits', async () => {
    const habitsMemory = new HabitsMemoryRepository()

    const output = mockHabits
    const findAllHabits = await habitsMemory.findAll()

    expect(findAllHabits).toEqual(output)
  })

  test('should call create method and create new habits', async () => {
    const createMemoryHabit = new HabitsMemoryRepository()

    const findAllHabits = await createMemoryHabit.create({ title: 'Beber 2L de água', weekDays: [1, 3, 5] })

    expect(findAllHabits).toEqual('Great! Habit created with success')
  })
})