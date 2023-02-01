import FastifyAdapter from 'infra/api/adapters/FastifyAdapter/FastifyAdapter';
import PrismaAdpater from 'infra/database/adapters/PrismaAdapter';
import HabitsDatabaseRepository from 'infra/repository/HabitsDatabaseRepository';
import Router from './infra/api/router/Router';

const httpServer = new FastifyAdapter();
const connection = new PrismaAdpater()

const habitsDatabaseRepository = new HabitsDatabaseRepository(connection)
const router = new Router(httpServer, habitsDatabaseRepository);
router.init();
httpServer.listen(3333);
