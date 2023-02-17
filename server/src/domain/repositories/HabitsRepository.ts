import { DayDetails, Habit } from "domain/repositories/Habit"

export interface HabitsRepository {
    findAll(): Promise<Habit[]>
    create(habitData: Habit): Promise<string>
    findDayDetails(date: string): Promise<DayDetails>
}