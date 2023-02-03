import { describe, test, expect } from "vitest";
import HabitsMemoryRepository, { mockHabits } from "./HabitsMemoryRepository";

describe('Habits Repository test', () => {
    test('should call findAll method and returns all habits', async () => {
        const habitsMemory = new HabitsMemoryRepository()

        const output = mockHabits
        const findAllHabits = await habitsMemory.findAll()
        
        expect(findAllHabits).toEqual(output)
    })
})