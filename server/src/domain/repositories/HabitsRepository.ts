import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO"
import { Habit } from "domain/repositories/Habit"

export interface HabitsRepository {
    findAll(): Promise<Habit[]>
    create(habitData: CreateHabitDTO): Promise<string>
    findDayDetails(date: string): Promise<Habit | Habit[]>
}