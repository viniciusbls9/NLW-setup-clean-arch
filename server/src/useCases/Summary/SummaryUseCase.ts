import { HabitsRepository } from "domain/repositories/HabitsRepository";

export class SummaryUseCase {
  constructor(private habitsRepository: HabitsRepository) { }

  async execute() {
    return this.habitsRepository.summary()
  }
}