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

  test("Should get specific habits by days", async () => {
    const habitsMemory = new HabitsMemoryRepository()
    const output = {
      possibleHabits: [
        {
          id: "0730ffac-d039-4194-9571-01aa2aa0efbd",
          title: "Beber 2L de água",
          created_at: "2023-02-05T00:00:00.000Z"
        }
      ],
      completedHabits: [
        "0730ffac-d039-4194-9571-01aa2aa0efbd"
      ]
    }

    const getDays = await habitsMemory.findDayDetails('2023-02-05T00:00:00.000Z')

    expect(getDays).toEqual(output)
  });
});