import { DayDetails, Habit } from "domain/repositories/Habit";
import { HabitsRepository } from "domain/repositories/HabitsRepository";
import Connection from "infra/database/adapters/Connection";
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";

export default class HabitsDatabaseRepository implements HabitsRepository {
    constructor(readonly connection: Connection) {}

    toggleHabit(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    findDayDetails(date: string): Promise<DayDetails> {
        return this.connection.getDayDetails(date)
    }

    create({ title, weekDays }: CreateHabitDTO): Promise<any> {
        return this.connection.createHabit({ title, weekDays })
    }

    findAll(): Promise<Habit[]> {
        return this.connection.getAllHabits()
    }
}