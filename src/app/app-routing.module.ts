import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponent } from './articles/articles.component';
import { RechercheParVendeurComponent } from './recherche-par-vendeur/recherche-par-vendeur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListeVendeursComponent } from './liste-vendeurs/liste-vendeurs.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ArticleGuard } from './article.guard';


const routes: Routes = [
  {path: "articles", component : ArticlesComponent},
  {path: "add-article", component : AddArticleComponent},
  {path: "updateArticle/:id", component: UpdateArticleComponent},
  {path: "", redirectTo: "articles", pathMatch: "full" },
  {path: "rechercheParVendeur", component : RechercheParVendeurComponent},
  {path: "listeVendeurs", component : ListeVendeursComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-produit", component : AddArticleComponent, canActivate:[ArticleGuard]},
  {path: 'login', component: LoginComponent},

  {path: "rechercheParNom", component : RechercheParNomComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
