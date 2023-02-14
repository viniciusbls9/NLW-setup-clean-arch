export interface Habit {
  id?: string;
  title: string;
  weekDays?: number[]
  created_at?: string
}

export interface DayDetails {
  possibleHabits: {
    id: string,
    title: string
    created_at: Date
  }[],
  completedHabits?: string[]
}