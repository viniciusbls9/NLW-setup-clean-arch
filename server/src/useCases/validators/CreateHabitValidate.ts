import { z } from "zod"

export default class CreateHabitValidate {
    validator = z

    constructor() {}

    validate(value: any) {
        console.log(value)
        const createHabitValidate = this.validator.object({
            title: this.validator.string(),
            weekDays: this.validator.array(
                this.validator.number().min(0).max(6)
            )
        })
    }
}