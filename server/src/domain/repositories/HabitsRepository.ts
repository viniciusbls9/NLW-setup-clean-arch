export interface HabitsRepository {
    findAll(): Promise<any[]> // change to Habits[] interface
    create(title: string, weekDays: string[]): Promise<void>
}