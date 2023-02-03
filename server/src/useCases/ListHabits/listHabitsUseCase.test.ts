import { describe, test, expect } from "vitest";
import HabitsMemoryRepository, { mockHabits } from "infra/repository/HabitsMemoryRepository";
import { ListHabitsUseCase } from "./ListHabitsUseCase";

describe('ListHabitsUseCase', () => {
    test('should call listHabitsUsecase.execute and returns all habits', async () => {
        const habitsMemory = new HabitsMemoryRepository()
        const listHabitsUseCase = new ListHabitsUseCase(habitsMemory)
        const habits = await listHabitsUseCase.execute()

        expect(habits).toEqual(mockHabits)
        
    })
})