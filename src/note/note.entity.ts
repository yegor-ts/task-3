import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Category {
  TASK = 'Task',
  RANDOM_THOUGHT = 'Random Thought',
  IDEA = 'Idea',
  QUOTE = 'Quote',
}

@Entity('note')
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created: Date;

  @Column({
    type: 'enum',
    enum: Category,
    default: Category.TASK,
  })
  category: Category;

  @Column()
  content: string;

  @Column()
  dates: string;

  @Column({ default: false })
  archived: boolean;
}
