import { NoteService } from './note.service';
import { Controller } from '@nestjs/common';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}
}
