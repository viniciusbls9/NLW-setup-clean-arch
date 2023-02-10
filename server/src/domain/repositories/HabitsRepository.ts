import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO"

export interface HabitsRepository {
    findAll(): Promise<any[]> // change to Habits[] interface
    create({title, weekDays}: CreateHabitDTO): Promise<string>
    findDayDetails(): Promise<any>
}