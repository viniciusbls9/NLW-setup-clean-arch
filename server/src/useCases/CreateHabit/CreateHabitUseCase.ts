import { HabitsRepository } from "domain/repositories/HabitsRepository";
import { CreateHabitDTO } from "./CreateHabitDTO";

export class CreateHabitUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute({title, weekDays}: CreateHabitDTO) {
        return this.habitsRepository.create({title, weekDays})
    }
}