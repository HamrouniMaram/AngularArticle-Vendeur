import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Vendeur } from "../model/vendeur.model";
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styles: [
  ]
})
export class UpdateArticleComponent implements OnInit {

  currentArticle = new Article();
  vendeurs! : Vendeur[];
updatedVenId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.listeVendeurs().
     subscribe(vens => {this.vendeurs = vens._embedded.vendeurs;
      console.log(vens);
});
    this.articleService.consulterArticle(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentArticle = prod;
      this.updatedVenId = this.currentArticle.vendeur.idVen;
      
    } ) ;
}


  

 updateArticle() {
  this.currentArticle.vendeur = this.vendeurs.find(ven => ven.idVen == this.updatedVenId)!;

  this.articleService.updateArticle(this.currentArticle).subscribe(prod => {
    this.router.navigate(['articles']); }
    );
}
}


