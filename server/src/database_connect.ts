import { DataSource } from 'typeorm';
import {
  CIF,
  Person,
  Student,
  Faculty,
  Administrator,
  Requests,
} from './stuff/entities/Data';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pepega',
  database: 'isdl',
  password: 'peepustrong',
  entities: [CIF, Person, Student, Faculty, Administrator, Requests],
  synchronize: true,
  logging: true,
});
