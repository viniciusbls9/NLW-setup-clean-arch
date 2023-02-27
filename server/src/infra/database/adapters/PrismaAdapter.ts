import Connection from "./Connection";
import { PrismaClient } from '@prisma/client'
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";
import dayjs from "dayjs";
import { DayDetails } from "domain/repositories/Habit";
export default class PrismaAdpater implements Connection {
  connection = new PrismaClient()

  constructor() { }

  async toggleHabit(id: string): Promise<void> {
    const today = dayjs().startOf('day').toDate()

    let day = await this.connection.day.findUnique({
      where: {
        date: today
      }
    })

    if (!day) {
      day = await this.connection.day.create({
        data: {
          date: today
        }
      })
    }

    const dayHabit = await this.connection.dayHabit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id
        }
      }
    })

    if(dayHabit) {
      await this.connection.dayHabit.delete({
        where: {
          id: dayHabit.id
        }
      })
    }

    await this.connection.dayHabit.create({
      data: {
        day_id: day.id,
        habit_id: id
      }
    })

  }

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