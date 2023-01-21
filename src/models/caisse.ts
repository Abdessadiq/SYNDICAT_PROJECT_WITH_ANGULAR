import { Immeuble } from './immeuble';
import { User } from './user';

export class Caisse {
  id!: number;
  type!: String;
  date!: Date;
  somme!: Number;
  detaiType!: String;
  user!: User;
  immeuble!: Immeuble;
}
