import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  imports: [FormsModule],
  templateUrl: './add-livre.html',
  styleUrl: './add-livre.css'
})
export class AddLivreComponent {

  livre: Livre = new Livre();

  constructor(
    private livreService: LivreService,
    private router: Router
  ) {

  }

  ajouterLivre() {

    this.livreService.ajouterLivre(this.livre);

    this.router.navigate(['/livres']);

  }

}