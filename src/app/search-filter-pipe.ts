import { Pipe, PipeTransform } from '@angular/core';
import { Livre } from './model/livre.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(livres: Livre[], texte: string): Livre[] {
    if (!livres) {
      return [];
    }

    const recherche = (texte || '').toLowerCase().trim();

    if (!recherche) {
      return livres;
    }

   return livres.filter(livre =>
  (livre.titreLivre || '').toLowerCase().includes(recherche)
);
  }
}
