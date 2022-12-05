import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Vendeur } from '../model/vendeur.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html'
})
export class AddArticleComponent implements OnInit {

  newArticle = new Article();
  vendeurs! : Vendeur[];
  newIdVen! : number;
newVendeur! : Vendeur;

constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private articleService: ArticleService) { }
  

  ngOnInit(): void {
    this.articleService.listeVendeurs().
    subscribe(vens => {this.vendeurs = vens._embedded.vendeurs;
    console.log(vens);
});
   // this.vendeurs = this.articleService.listeVendeurs();
  }


addArticle(){
  this.newArticle.vendeur = this.vendeurs.find(ven => ven.idVen == this.newIdVen)!;

  this.articleService.ajouterArticle(this.newArticle)
  .subscribe(prod => {
  console.log(prod);
  this.router.navigate(['articles']);
  });
  }
  
  }


