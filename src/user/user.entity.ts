import { ExecFileSyncOptionsWithBufferEncoding } from 'child_process';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    unsigned: false,
  })
  id: number;

  @Column({
    length: 30,
    nullable: false,
  })
  firstName: string;
  
  @Column({
    length: 30,
    nullable: false,
  })
  lastName: string;

  @Column({
    unique: true,
    nullable: false,
    length: 20,
  })
  username: string;

  @Column({
    unique: true,
    nullable: false,
    length: 127,
  })
  email: string;

  @Column({
    nullable: false,
    length: 200,
  })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
