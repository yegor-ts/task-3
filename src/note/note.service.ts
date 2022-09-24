import { NoteEntity } from './note.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}
}
