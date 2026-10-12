
import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { TypeLivre } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

types: TypeLivre[] = [
  { nomType: 'Roman' },
  { nomType: 'Policier' },
  { nomType: 'Science-fiction' },
  { nomType: 'Fantastique' },
  { nomType: 'Biographie' },
  { nomType: 'Histoire' },
  { nomType: 'Informatique' },
  { nomType: 'Poésie' }
];
  livres: Livre[];

  constructor() {
    this.livres = [
      {
        idLivre: 1,
        titreLivre: 'Le Petit Prince',
        auteurLivre: 'Antoine de Saint-Exupéry',
        prixLivre: 25,
        dateCreation: new Date('2020-01-14'),
        type: this.types[0]
      },
      {
        idLivre: 2,
        titreLivre: "L'Étranger",
        auteurLivre: 'Albert Camus',
        prixLivre: 30,
        dateCreation: new Date('2021-02-20'),
        type: this.types[0]
      },
      {
        idLivre: 3,
        titreLivre: 'Harry Potter',
        auteurLivre: 'J.K. Rowling',
        prixLivre: 45,
        dateCreation: new Date('2022-03-10'),
        type: this.types[3]
      }
    ];
  }

  listeLivres(): Livre[] {
    return this.livres;
  }

  ajouterLivre(livre: Livre): void {
    this.livres.push(livre);
  }

  supprimerLivre(id: number): void {
    this.livres = this.livres.filter(
      livre => livre.idLivre !== id
    );
  }

  chercherLivre(id: number): Livre | undefined {
    return this.livres.find(
      livre => livre.idLivre === id
    );
  }

  modifierLivre(livreModifie: Livre): void {
    const index = this.livres.findIndex(
      livre => livre.idLivre === livreModifie.idLivre
    );

    if (index !== -1) {
      this.livres[index] = livreModifie;
    }
  }

  listeTypes(): TypeLivre[] {
  return this.types;
}

consulterType(nom: string): TypeLivre | undefined {
  return this.types.find(type => type.nomType === nom);
}
}
