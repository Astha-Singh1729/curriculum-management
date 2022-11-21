import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  name: string;
  @Column()
  password: string;
}

@Entity()
export class Student extends Person {
  @Column()
  branch: string;
}

@Entity()
export class CIF {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  course: string;
  @Column()
  department: string;
  @Column()
  content: string;

  @OneToMany(() => Bridge, (bridge) => bridge.cif)
  bridge: Bridge[];
}

@Entity()
export class Faculty extends Person {
  @OneToMany(() => Bridge, (bridge) => bridge.faculty)
  bridge: Bridge[];
}

@Entity()
export class Bridge {
  @ManyToOne(() => CIF, (cif) => cif.bridge)
  cif: CIF;

  @ManyToOne(() => Faculty, (faculty) => faculty.bridge)
  faculty: Faculty;

  @PrimaryColumn()
  temp_content: string;
}

@Entity()
export class Administrator extends Person {}
