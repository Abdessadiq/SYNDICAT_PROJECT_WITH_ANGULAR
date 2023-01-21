import { Immeuble } from './immeuble';

export class Appartement {
  id!: number;
  numero!: number;
  numeroEtage!: number;
  immeuble = new Immeuble();
}
