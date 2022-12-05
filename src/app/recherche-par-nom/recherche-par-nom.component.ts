import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
nomArticle!:string;
articles!:Article[];
allArticles!:Article[];
searchTerm!:string;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.listeArticle().subscribe(prods=>{
    console.log(prods);
    this.articles=prods;
    });
  }
rechercherProds(){
this.articleService.rechercherParNom(this.nomArticle).subscribe(prods =>{
  console.log(prods);
  this.articles=prods});
}
onKeyUp(filterText : string){
  this.articles = this.allArticles.filter(item =>
    item.nomArticle.toLowerCase().includes(filterText));
  }
}
