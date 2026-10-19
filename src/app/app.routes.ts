
import { Routes } from '@angular/router';

import { LivreComponent } from './livre/livre';
import { AddLivreComponent } from './add-livre/add-livre';
import { UpdateLivreComponent } from './update-livre/update-livre';

import {RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';
import { RechercheParNomPipeComponent } from './recherche-par-nom-pipe/recherche-par-nom-pipe';

export const routes: Routes = [
  {
    path: 'livres',
    component: LivreComponent
  },
  {
    path: 'add-livre',
    component: AddLivreComponent
  },
  {
    path: 'update-livre/:id',
    component: UpdateLivreComponent
  },
  {
    path: 'recherche-par-categorie',
    component: RechercheParCategorieComponent
  },
  {
    path: 'rechercheParNom',
    component: RechercheParNomComponent
  },
  {
    path: 'rechercheParNomPipe',
    component: RechercheParNomPipeComponent
  },
  {
    path: '',
    redirectTo: 'livres',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'livres'
  }
];
