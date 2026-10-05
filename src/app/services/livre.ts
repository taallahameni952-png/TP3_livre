import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  livres: Livre[];

  constructor() {

    this.livres = [

      {
        idLivre: 1,
        titreLivre: 'Le Petit Prince',
        auteurLivre: 'Antoine de Saint-Exupéry',
        prixLivre: 25,
        dateCreation: new Date('01/14/2020')
      },

      {
        idLivre: 2,
        titreLivre: 'L\'Étranger',
        auteurLivre: 'Albert Camus',
        prixLivre: 30,
        dateCreation: new Date('02/20/2021')
      },

      {
        idLivre: 3,
        titreLivre: 'Harry Potter',
        auteurLivre: 'J.K. Rowling',
        prixLivre: 45,
        dateCreation: new Date('03/10/2022')
      }

    ];

  }

  listeLivres(): Livre[] {
    return this.livres;
  }

  ajouterLivre(livre: Livre) {
    this.livres.push(livre);
  }

  supprimerLivre(id: number) {

    this.livres = this.livres.filter(
      livre => livre.idLivre !== id
    );

  }
  chercherLivre(id: number): Livre | undefined {

  return this.livres.find(
    livre => livre.idLivre === id
  );

}

modifierLivre(livreModifie: Livre) {

  const index = this.livres.findIndex(
    livre => livre.idLivre === livreModifie.idLivre
  );

  if (index !== -1) {

    this.livres[index] = livreModifie;

  }

}

}