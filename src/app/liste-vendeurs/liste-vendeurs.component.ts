import { Component, OnInit } from '@angular/core';
import { Vendeur } from '../model/vendeur.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-liste-vendeurs',
  templateUrl: './liste-vendeurs.component.html',
  styles: [
  ]
})
export class ListeVendeursComponent implements OnInit {
  vendeurs!:Vendeur[];
  updatedVen:Vendeur = {"idVen":0,"nomVen":""};
  ajout:boolean=true;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.listeVendeurs().subscribe(vens => {this.vendeurs = vens._embedded.vendeurs;
     console.log(vens);
});

  }
  chargerVendeurs(){
    this.articleService.listeVendeurs().
subscribe(vens => {this.vendeurs = vens._embedded.vendeurs;
console.log(vens);
});
  }
  vendeurUpdated(ven:Vendeur){
    console.log("ven updated event",ven);
    this.articleService.ajouterVendeur(ven).
     subscribe( ()=> this.chargerVendeurs());
    }
    
      updateVen(ven:Vendeur) {
        this.updatedVen=ven;
        this.ajout=false; 
        }
}
