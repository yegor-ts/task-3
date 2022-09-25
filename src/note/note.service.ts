import { NoteEntity } from './note.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}

  create(noteData: CreateNoteDto): Promise<NoteEntity> {
    return this.noteRepository.save(noteData);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.noteRepository.delete(id);
  }

  async update(id: number, noteData: UpdateNoteDto): Promise<NoteEntity> {
    await this.noteRepository.update(id, noteData);

    return this.noteRepository.findOne({ where: { id } });
  }

  findOne(id: number): Promise<NoteEntity> {
    return this.noteRepository.findOne({
      where: {
        id,
      },
    });
  }

  findAll(): Promise<NoteEntity[]> {
    return this.noteRepository.find();
  }
}
