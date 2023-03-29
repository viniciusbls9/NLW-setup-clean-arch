export interface Habit {
  id?: string;
  title: string;
  weekDays?: number[];
  created_at?: string;
}

export interface DayDetails {
  possibleHabits: {
    id: string;
    title: string;
    created_at: Date | string;
  }[];
  completedHabits?: string[];
}

export interface HabitsRepository {
  findAll(): Promise<Habit[]>;
  create(habitData: Habit): Promise<any>;
  findDayDetails(date: string): Promise<DayDetails>;
  toggleHabit(id: string): Promise<void>;
  summary(): Promise<unknown>;
}
