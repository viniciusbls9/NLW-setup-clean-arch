import { Habit } from "domain/repositories/Habit"
import { z } from "zod"

export default class CreateHabitValidate {
    validator = z
    data: Habit

    constructor(habitData: Habit | any) {
        this.data = habitData
    }

    validate(): Habit {
        const createHabitValidate = this.validator.object({
            title: this.validator.string().min(3),
            weekDays: this.validator.array(
                this.validator.number().min(0).max(6)
            )
        })

        const { title, weekDays } = createHabitValidate.parse(this.data)
        return { title, weekDays }
    }
}