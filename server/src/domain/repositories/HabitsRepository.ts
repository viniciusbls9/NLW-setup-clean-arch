import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO"
import { Habit } from "domain/repositories/Habit"

export interface HabitsRepository {
    findAll(): Promise<Habit[]> // change to Habits[] interface
    create(habitData: CreateHabitDTO): Promise<string>
    findDayDetails(date: string): Promise<any[]>
}