import Connection from "./Connection";
import { PrismaClient } from '@prisma/client'

export default class PrismaAdpater implements Connection {
    connection: any

    constructor() {
        this.connection = new PrismaClient()
    }

    getAllHabits(): Promise<any> {
        return this.connection.habit.findMany()
    }
    
}