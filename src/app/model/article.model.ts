import { Vendeur } from "./vendeur.model";

export class Article {
    
    idArticle! : number;
    nomArticle! : string;
    prixArticle! : number;
    dateCreation! : Date ;
    vendeur! : Vendeur;
  filter: any;
 
    }
    