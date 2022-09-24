import { NoteEntity } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity])],
  providers: [NoteService],
  controllers: [NoteController],
})
export class NoteModule {}
