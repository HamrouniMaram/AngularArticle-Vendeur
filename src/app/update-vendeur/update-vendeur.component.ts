import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vendeur } from '../model/vendeur.model';

@Component({
  selector: 'app-update-vendeur',
  templateUrl: './update-vendeur.component.html',
  styles: [
  ]
})
export class UpdateVendeurComponent implements OnInit {
  @Input()
  vendeur!: Vendeur;
  @Output() 
vendeurUpdated = new EventEmitter<Vendeur>();
@Input()
ajout!:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateVendeur ",this.vendeur);
  }
  
  saveVendeur(){
    this.vendeurUpdated.emit(this.vendeur);
    }
    
}
