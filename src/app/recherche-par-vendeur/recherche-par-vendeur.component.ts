import { Component, OnInit } from '@angular/core';
import { Vendeur } from '../model/vendeur.model';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-recherche-par-vendeur',
  templateUrl: './recherche-par-vendeur.component.html',
  styles: [
  ]
})
export class RechercheParVendeurComponent implements OnInit {
  IdVendeur! : number;
  articles! : Article[];
  vendeurs! : Vendeur[];


  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.listeVendeurs().
     subscribe(vens => {this.vendeurs = vens._embedded.vendeurs;
    console.log(vens);
});

  }
  onChange(){
    this.articleService.rechercherParVendeur(this.IdVendeur).
    subscribe(prods =>{this.articles=prods});
  }
}
