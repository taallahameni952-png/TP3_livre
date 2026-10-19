
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { SearchFilterPipe } from '../search-filter-pipe';
@Component({
  selector: 'app-recherche-par-nom-pipe',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom-pipe.html',
  styleUrl: './recherche-par-nom-pipe.css'
})
export class RechercheParNomPipeComponent implements OnInit {
  livres: Livre[] = [];
  searchTerm = '';

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.livres = this.livreService.listeLivres();
  }
}

