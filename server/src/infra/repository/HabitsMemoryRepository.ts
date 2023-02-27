import { DayDetails, Habit } from "domain/repositories/Habit";
import { HabitsRepository } from "domain/repositories/HabitsRepository";
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";

export const mockHabits = [
  {
    id: "f564aa97-d649-410e-b2f0-70cfe9dae2e2",
    title: "Drink Water",
    created_at: "2023-02-01T00:00:00.000Z",
  },
  {
    id: "d61207cd-4ff2-4908-a016-d3cdc3a2b9cd",
    title: "Study Clean Arch",
    created_at: "2023-02-05T00:00:00.000Z"
  },
  {
    id: "d61207cd-4ff2-4908-a016-d3cdc3a2b9cd",
    title: "Study backend",
    created_at: "2023-02-05T00:00:00.000Z"
  }
];

const dayDetailsMock = {
  possibleHabits: [
    {
      id: "0730ffac-d039-4194-9571-01aa2aa0efbd",
      title: "Beber 2L de água",
      created_at: "2023-02-05T00:00:00.000Z"
    },
    {
      id: "0730ffac-d039-4194-9571-01aa2aa0efbd",
      title: "Learn about backend",
      created_at: "2022-02-05T00:00:00.000Z"
    }
  ],
  completedHabits: [
		"0730ffac-d039-4194-9571-01aa2aa0efbd"
	]
}

export default class HabitsMemoryRepository implements HabitsRepository {
  habits: Habit[];
  possibleHabits: any

  constructor() {
    this.habits = mockHabits;
    this.possibleHabits = dayDetailsMock.possibleHabits
  }

  toggleHabit(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async findDayDetails(date: string): Promise<DayDetails> {
    const findDay = dayDetailsMock.possibleHabits.filter((habit) => habit.created_at === date)

    if (!findDay) {
      throw new Error('Error')
    }

    return {
      possibleHabits: findDay,
      completedHabits: dayDetailsMock.completedHabits
    }
  }

  async create(habitData: CreateHabitDTO): Promise<string> {

    if (!habitData.title || !habitData.weekDays.length) {
      throw new Error('Title is required')
    }

    this.habits.push({
      title: habitData.title,
      weekDays: habitData.weekDays,
      created_at: "1970-01-01T00:00:00.000Z"
    })

    return 'Great! Habit created with success'
  }

  async findAll(): Promise<Habit[]> {
    return this.habits
  }
}