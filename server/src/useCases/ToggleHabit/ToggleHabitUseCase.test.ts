import { describe, test, expect } from "vitest";
import HabitsMemoryRepository, { dayDetailsMock } from "infra/repository/HabitsMemoryRepository";
import { ToggleHabitUseCase } from "./ToggleHabitUseCase";

describe('ToggleHabitUseCase', () => {
  test('should call toggleHabitUseCase.execute and returns completed habits', async () => {
    const habitsMemory = new HabitsMemoryRepository()
    const toggleHabitUseCase = new ToggleHabitUseCase(habitsMemory)

    const params = {
      id: '00880d75-a933-4fef-94ab-e05744435297'
    }
    const output = {
      possibleHabits: [
        {
          id: "0730ffac-d039-4194-9571-01aa2aa0efbd",
          title: "Beber 2L de água",
          created_at: "2023-02-05T00:00:00.000Z"
        },
        {
          id: "00880d75-a933-4fef-94ab-e05744435297",
          title: "Exercitar",
          created_at: "2023-01-03T06:00:00.000Z"
        },
      ],
      completedHabits: [
        "0730ffac-d039-4194-9571-01aa2aa0efbd",
        "00880d75-a933-4fef-94ab-e05744435297"
      ]
    }

    await toggleHabitUseCase.execute(params)

    expect(dayDetailsMock).toEqual(output)

  })

  test('should call toggleHabitUseCase.execute with existing id and remove from completedHabits array', async () => {
    const habitsMemory = new HabitsMemoryRepository()
    const toggleHabitUseCase = new ToggleHabitUseCase(habitsMemory)
    const params = {
      id: '00880d75-a933-4fef-94ab-e05744435297'
    }
    dayDetailsMock.completedHabits.push(params.id)

    const output = {
      ...dayDetailsMock,
      completedHabits: [
        "0730ffac-d039-4194-9571-01aa2aa0efbd"
      ]
    }

    await toggleHabitUseCase.execute(params)
    expect(dayDetailsMock).toEqual(output)

  })
})