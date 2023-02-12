import { Habit } from "domain/repositories/Habit";
import { HabitsRepository } from "domain/repositories/HabitsRepository";
import Connection from "infra/database/adapters/Connection";
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";

export default class HabitsDatabaseRepository implements HabitsRepository {
    constructor(readonly connection: Connection) {}

    findDayDetails(date: string): Promise<Habit | Habit[]> {
        return this.connection.getDayDetails(date)
    }

    create({ title, weekDays }: CreateHabitDTO): Promise<any> {
        return this.connection.createHabit({ title, weekDays })
    }

    findAll(): Promise<Habit[]> {
        return this.connection.getAllHabits()
    }
}