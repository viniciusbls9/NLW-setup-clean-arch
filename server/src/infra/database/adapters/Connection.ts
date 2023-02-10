import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO"

export default interface Connection {
    getAllHabits(): Promise<any[]>
    createHabit({ title, weekDays }: CreateHabitDTO): Promise<any>
    getDayDetails(date: string): Promise<any>
}