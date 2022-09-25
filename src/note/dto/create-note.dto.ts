import { Category } from '../note.entity';

export class CreateNoteDto {
  readonly name: string;
  readonly category: Category;
  readonly content: string;
  readonly dates: string;
  readonly archived?: boolean;
}
