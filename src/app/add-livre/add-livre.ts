
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { Router } from '@angular/router';
import { TypeLivre } from '../model/type.model';

@Component({
  selector: 'app-add-livre',
  imports: [FormsModule],
  templateUrl: './add-livre.html',
  styleUrl: './add-livre.css'
})
export class AddLivreComponent implements OnInit {

  livre: Livre = new Livre();

  types!: TypeLivre[];
  newNomType!: string;

  constructor(
    private livreService: LivreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.types = this.livreService.listeTypes();
    this.newNomType = 'Roman';
  }

  ajouterLivre(): void {
  const typeTrouve = this.livreService.consulterType(this.newNomType);

  if (typeTrouve) {
    this.livre.type = typeTrouve;

    this.livreService.ajouterLivre(this.livre);

    this.router.navigate(['/livres']);
  }
}
}
