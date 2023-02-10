import { describe, test, expect } from 'vitest'
import HabitsMemoryRepository, { mockHabits } from 'infra/repository/HabitsMemoryRepository';

describe("Router", () => {
  test("Should get all habits", async () => {
    const habitsMemory = new HabitsMemoryRepository()


    const habits = await habitsMemory.findAll()

    expect(habits).toEqual(mockHabits)
  });

  test("Should create new habits", async () => {
    const habitsMemory = new HabitsMemoryRepository()


    const habits = await habitsMemory.create({title: 'Habit Example', weekDays: [0,1,2]})

    expect(habits).toEqual('Great! Habit created with success')
  });
});