import { HabitsRepository } from "domain/repositories/HabitsRepository";
import { CreateHabitDTO } from "useCases/CreateHabit/CreateHabitDTO";

export const mockHabits = [
  {
    id: "f564aa97-d649-410e-b2f0-70cfe9dae2e2",
    title: "Beber água",
    create_at: "1970-01-01T00:00:00.000Z"
  },
  {
    id: "d61207cd-4ff2-4908-a016-d3cdc3a2b9cd",
    title: "Teste",
    create_at: "1970-01-01T00:00:00.000Z"
  }
];
export default class HabitsMemoryRepository implements HabitsRepository {
  habits: any[];

  constructor() {
    this.habits = mockHabits;
  }

  async create({ title, weekDays }: CreateHabitDTO): Promise<string> {
    this.habits.push({
      title,
      weekDays
    })

    return 'Great! Habit created with success'
  }

  async findAll(): Promise<any[]> {
    return this.habits
  }
}