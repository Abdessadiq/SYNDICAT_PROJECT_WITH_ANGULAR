import { Immeuble } from './immeuble';
import { User } from './user';

export class Annonce {
  id!: number;
  sujet!: String;
  contenu!: String;
  user = new User();
  immeuble = new Immeuble();
}
