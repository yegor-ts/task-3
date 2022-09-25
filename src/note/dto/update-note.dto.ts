import { Category } from '../note.entity';

export class UpdateNoteDto {
  readonly name?: string;
  readonly category?: Category;
  readonly content?: string;
  readonly dates?: string;
  readonly archived?: boolean;
}
