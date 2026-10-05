import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-livre',
 imports: [DatePipe, RouterLink],
  templateUrl: './livre.html',
  styleUrl: './livre.css'
})
export class LivreComponent {

  livres: Livre[];

  constructor(private livreService: LivreService) {

    this.livres = this.livreService.listeLivres();

  }

  supprimerLivre(id: number) {

    if (confirm('Voulez-vous vraiment supprimer ce livre ?')) {

      this.livreService.supprimerLivre(id);

      this.livres = this.livreService.listeLivres();

    }

  }

}