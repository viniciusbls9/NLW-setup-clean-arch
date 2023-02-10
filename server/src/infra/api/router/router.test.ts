import { describe, test, expect } from 'vitest'
import HabitsMemoryRepository from '../../../infra/repository/HabitsMemoryRepository';

describe("Router", () => {
  test("Should get all habits", async () => {
    const habitsMemory = new HabitsMemoryRepository()


    const habits = await habitsMemory.findAll()

    expect(habits).toEqual([
      {
        id: "f564aa97-d649-410e-b2f0-70cfe9dae2e2",
        title: "Beber água",
        create_at: "1970-01-01T00:00:00.000Z"
      },
      {
        id: "d61207cd-4ff2-4908-a016-d3cdc3a2b9cd",
        title: "Teste",
        create_at: "1970-01-01T00:00:00.000Z"
      }
    ])
  });

  test("Should create new habits", async () => {
    const habitsMemory = new HabitsMemoryRepository()


    const habits = await habitsMemory.create({title: 'Habit Example', weekDays: [0,1,2]})

    expect(habits).toEqual('Great! Habit created with success')
  });
});