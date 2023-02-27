import { DayDetails, Habit } from "domain/repositories/Habit"
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO"

export default interface Connection {
    getAllHabits(): Promise<Habit[]>
    createHabit(habitData: CreateHabitDTO): Promise<any>
    getDayDetails(date: string): Promise<DayDetails>
}