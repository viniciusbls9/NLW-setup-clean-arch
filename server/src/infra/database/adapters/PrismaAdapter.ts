import Connection from "./Connection";
import { PrismaClient } from '@prisma/client'
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";
export default class PrismaAdpater implements Connection {
  connection = new PrismaClient()

  constructor() { }

  async createHabit({ title, weekDays }: CreateHabitDTO): Promise<string> {
    await this.connection.habit.create({
      data: {
        title,
        created_at: new Date(),
        weekDays: {
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay
            }
          })
        }
      }
    })

    return 'Great! Habit created with success'
  }

  getAllHabits(): Promise<any> {
    return this.connection.habit.findMany()
  }

}