import { HabitsRepository } from "domain/repositories/HabitsRepository";
import UseCaseValidator from "useCases/validators/UseCaseValidator";

export class DayDetailsUseCase {
    constructor(private habitsRepository: HabitsRepository) {}

    async execute(dayDetailsParams: { date: string }) {
        const validate = new UseCaseValidator(dayDetailsParams)
        validate.getDayDetailsValidator()
        return this.habitsRepository.findDayDetails(dayDetailsParams.date)
    }
}