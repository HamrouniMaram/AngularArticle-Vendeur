import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule } from '@angular/forms';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RechercheParVendeurComponent } from './recherche-par-vendeur/recherche-par-vendeur.component';
import { ListeVendeursComponent } from './liste-vendeurs/liste-vendeurs.component';
import { UpdateVendeurComponent } from './update-vendeur/update-vendeur.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    RechercheParVendeurComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeVendeursComponent,
    UpdateVendeurComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
                useClass : TokenInterceptor,
                multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
