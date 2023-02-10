import Connection from "./Connection";
import { PrismaClient } from '@prisma/client'
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";
export default class PrismaAdpater implements Connection {
  connection = new PrismaClient()

  constructor() { }

  async getDayDetails(date: string): Promise<any> {
    const weekDay = Number(date.split('-')[2].split('T')[0])

    const possibleHabits = await this.connection.habit.findMany({
      where: {
        created_at: {
          lte: date
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })
    
    return {
      possibleHabits
    }
  }

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

  getAllHabits(): Promise<any[]> {
    return this.connection.habit.findMany()
  }

}