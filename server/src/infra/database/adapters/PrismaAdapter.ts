import Connection from "./Connection";
import { PrismaClient } from '@prisma/client'
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";
import dayjs from "dayjs";
import { DayDetails } from "domain/repositories/Habit";
export default class PrismaAdpater implements Connection {
  connection = new PrismaClient()

  constructor() { }

  async getDayDetails(date: string): Promise<DayDetails> {
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

    const day = await this.connection.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabits: true
      }
    })

    const completedHabits = day?.dayHabits.map((dayHabit) => {
      return dayHabit.habit_id
    })
    
    return {
      possibleHabits,
      completedHabits
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
    const getAllHabits =  this.connection.habit.findMany()

    return getAllHabits
  }

}