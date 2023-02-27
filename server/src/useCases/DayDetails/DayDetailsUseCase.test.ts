import { describe, test, expect } from "vitest";
import HabitsMemoryRepository from "infra/repository/HabitsMemoryRepository";
import { DayDetailsUseCase } from "./DayDetailsUseCase";

describe('DayDetailsUseCase', () => {
  test('should call DayDetailsUseCase.execute and returns specifics habits by day', async () => {
    const habitsMemory = new HabitsMemoryRepository()
    const dayDetailsUseCase = new DayDetailsUseCase(habitsMemory)

    const params = {
      date: '2023-02-05T00:00:00.000Z'
    }

    const output = {
      possibleHabits: [
        {
          id: "0730ffac-d039-4194-9571-01aa2aa0efbd",
          title: "Beber 2L de água",
          created_at: "2023-02-05T00:00:00.000Z"
        },
      ],
      completedHabits: [
        "0730ffac-d039-4194-9571-01aa2aa0efbd"
      ]
    }

    const habits = await dayDetailsUseCase.execute(params)

    expect(habits).toEqual(output)

  })

  test('should call DayDetailsUseCase.execute with any date and returns void', async () => {
    const habitsMemory = new HabitsMemoryRepository()
    const dayDetailsUseCase = new DayDetailsUseCase(habitsMemory)

    const params = {
      date: '2021-10-05T00:00:00.000Z'
    }

    const habits = await dayDetailsUseCase.execute(params)

    expect(habits.possibleHabits).toEqual([])

  })
})