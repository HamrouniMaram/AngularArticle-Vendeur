import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {

    articles? : Article[]; //un tableau de articles

  constructor(
    private articleService : ArticleService,
    public authService: AuthService) {
      
   //this.articles=[];
     }

  ngOnInit(): void {
   this.chargerArticles();
    //this.articles = this.articleService.listeArticles();
  }
chargerArticles(){
  this.articleService.listeArticle().subscribe(prods => {
    console.log(prods);
    this.articles = prods;
    });
}
  
supprimerArticle(p: Article)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.articleService.supprimerArticle(p.idArticle).subscribe(() => {
      console.log("article supprimé");
      this.chargerArticles();
});
}  

       
      

}
