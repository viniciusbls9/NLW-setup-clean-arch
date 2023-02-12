import { Habit } from "domain/repositories/Habit"
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO"

export default interface Connection {
    getAllHabits(): Promise<Habit[]>
    createHabit({ title, weekDays }: CreateHabitDTO): Promise<any>
    getDayDetails(date: string): Promise<Habit | Habit[]>
}