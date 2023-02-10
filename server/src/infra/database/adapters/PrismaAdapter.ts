import Connection from "./Connection";
import { PrismaClient } from '@prisma/client'
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";
import dayjs from "dayjs";
export default class PrismaAdpater implements Connection {
  connection = new PrismaClient()

  constructor() { }

  async getDayDetails(date: string): Promise<any> {
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')

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

  async createHabit({ title, weekDays }: CreateHabitDTO): Promise<any> {
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
  }

  getAllHabits(): Promise<any[]> {
    return this.connection.habit.findMany()
  }

}