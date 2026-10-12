import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { TypeLivre } from '../model/type.model';
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
this.types = this.livreService.listeTypes();

if (livreTrouve) {
  this.livre = { ...livreTrouve };
  this.updatedNomType = this.livre.type?.nomType ?? 'Roman';
}
  }

updateLivre(): void {
  const typeTrouve = this.livreService.consulterType(this.updatedNomType);

  if (typeTrouve) {
    this.livre.type = typeTrouve;

    this.livreService.modifierLivre(this.livre);

    this.router.navigate(['/livres']);
  }
}
  changerDate(date: string): void {
  if (date !== '') {
    this.livre.dateCreation = new Date(date);
  }
}
datePourFormulaire(): string {
  if (!this.livre.dateCreation) {
    return '';
  }

  const date = new Date(this.livre.dateCreation);

  const annee = date.getFullYear();
  const mois = String(date.getMonth() + 1).padStart(2, '0');
  const jour = String(date.getDate()).padStart(2, '0');

  return `${annee}-${mois}-${jour}`;
}
types!: TypeLivre[];
updatedNomType!: string;
}
