import { HabitsRepository } from "domain/repositories/HabitsRepository";
import Connection from "infra/database/adapters/Connection";

export default class HabitsDatabaseRepository implements HabitsRepository {
    constructor(readonly connection: Connection) {}

    findAll(): Promise<any[]> {
        return this.connection.getAllHabits()
    }
}