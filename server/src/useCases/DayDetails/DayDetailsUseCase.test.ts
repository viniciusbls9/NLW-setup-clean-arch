import { describe, test, expect } from "vitest";
import HabitsMemoryRepository from "infra/repository/HabitsMemoryRepository";
import { DayDetailsUseCase } from "./DayDetailsUseCase";

describe('DayDetailsUseCase', () => {
  test('should call DayDetailsUseCase.execute and returns specifics habits by day', async () => {
    const habitsMemory = new HabitsMemoryRepository()
    const dayDetailsUseCase = new DayDetailsUseCase(habitsMemory)

    const date = '2023-02-05T00:00:00.000Z'
    const output = [
      {
        id: "d61207cd-4ff2-4908-a016-d3cdc3a2b9cd",
        title: "Study Clean Arch",
        created_at: "2023-02-05T00:00:00.000Z"
      },
      {
        id: "d61207cd-4ff2-4908-a016-d3cdc3a2b9cd",
        title: "Study backend",
        created_at: "2023-02-05T00:00:00.000Z"
      }
    ];
    const habits = await dayDetailsUseCase.execute(date)

    expect(habits).toEqual(output)

  })
})