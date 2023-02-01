export interface HabitsRepository {
    findAll(): Promise<any[]> // change to Habits[] interface
}