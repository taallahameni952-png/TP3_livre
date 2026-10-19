
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-par-nom.html',
  styleUrl: './recherche-par-nom.css'
})
export class RechercheParNomComponent implements OnInit {
  livres: Livre[] = [];
  tousLesLivres: Livre[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.tousLesLivres = this.livreService.listeLivres();
    this.livres = [...this.tousLesLivres];
  }

  onKeyUp(texte: string): void {
    const recherche = texte.trim().toLowerCase();

    this.livres = this.tousLesLivres.filter(livre =>
      (livre.titreLivre ?? '')
        .toLowerCase()
        .includes(recherche)
    );
  }
}
