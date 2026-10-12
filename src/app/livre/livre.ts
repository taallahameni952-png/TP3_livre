import { Component } from '@angular/core';// t5alina nasn3ou composante angular
import { DatePipe } from '@angular/common';//bech njmou n3mlou date jj/mm/aaaa
import { Livre } from '../model/livre.model';// yjib modelle livre
import { LivreService } from '../services/livre';// njibou service bech nst3mlouh
import { RouterLink } from '@angular/router'; //y5alina n3mlou des lien angular
@Component({
  selector: 'app-livre',
 imports: [DatePipe, RouterLink],
  templateUrl: './livre.html', //lien avec le fichier html utilisé
  styleUrl: './livre.css'//lien avec le fich css utilisé
})
export class LivreComponent {

  livres: Livre[];

  constructor(private livreService: LivreService) {

    this.livres = this.livreService.listeLivres();//yjib des livres mn livesservise y7othom fi livres eli sna3ha

  }

  supprimerLivre(id: number) {

    if (confirm('Voulez-vous vraiment supprimer ce livre ?')) {//confirmer hiya boite de confirmation eli bech to5rej ki n7eb nfasa5

      this.livreService.supprimerLivre(id);//bech yfsa5 lkteb eli 3andou id heka

      this.livres = this.livreService.listeLivres();//bech y7oy liste ejdida mte3 service fl liste eli nst3mlou fiha fl  composant

    }

  }

}