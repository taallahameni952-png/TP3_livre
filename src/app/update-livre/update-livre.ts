import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';

@Component({
  selector: 'app-update-livre',
  imports: [FormsModule],
  templateUrl: './update-livre.html',
  styleUrl: './update-livre.css'
})
export class UpdateLivreComponent {

  livre!: Livre;

  constructor(
    private livreService: LivreService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const livreTrouve = this.livreService.chercherLivre(id);

    if (livreTrouve) {
      this.livre = { ...livreTrouve };
    }

  }

  updateLivre() {

    this.livreService.modifierLivre(this.livre);

    this.router.navigate(['/livres']);

  }

}
