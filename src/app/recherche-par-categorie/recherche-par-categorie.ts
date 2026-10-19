
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { TypeLivre } from '../model/type.model';
import { LivreService } from '../services/livre';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-categorie.html',

})
export class RechercheParCategorieComponent implements OnInit {
  livres: Livre[] = [];
  categories: TypeLivre[] = [];
  nomCategorieSelectionnee = '';

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.categories = this.livreService.listeTypes();
  }

  onChange(): void {
    this.livres = this.livreService.rechercherParType(
      this.nomCategorieSelectionnee
    );
  }
}
