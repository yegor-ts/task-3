import { UpdateNoteDto } from './dto/update-note.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NOTE_NOT_FOUND } from './note.constants';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('stats')
  findStats() {
    return this.noteService.findStats();
  }

  @Post()
  create(@Body() noteData: CreateNoteDto) {
    return this.noteService.create(noteData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedNote = await this.noteService.delete(id);

    if (!deletedNote.affected) {
      throw new NotFoundException(NOTE_NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') noteId: string, @Body() noteData: UpdateNoteDto) {
    const id = parseInt(noteId);

    const updatedNote = await this.noteService.update(id, noteData);

    if (!updatedNote) {
      throw new NotFoundException(NOTE_NOT_FOUND);
    }

    return updatedNote;
  }

  @Get(':id')
  async findOne(@Param('id') noteId: string) {
    const id = parseInt(noteId);

    const note = await this.noteService.findOne(id);

    if (!note) {
      throw new NotFoundException(NOTE_NOT_FOUND);
    }

    return note;
  }

  @Get()
  findAll() {
    return this.noteService.findAll();
  }
}
