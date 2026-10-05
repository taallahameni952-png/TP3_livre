import { Routes } from '@angular/router';
import { LivreComponent } from './livre/livre';
import { AddLivreComponent } from './add-livre/add-livre';
import { UpdateLivreComponent } from './update-livre/update-livre';
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
    path: '',
    redirectTo: 'livres',
    pathMatch: 'full'
  },
{
  path: 'update-livre/:id',
  component: UpdateLivreComponent
},
];