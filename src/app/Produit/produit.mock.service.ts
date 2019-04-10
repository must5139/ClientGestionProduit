import {Injectable} from '@angular/core';
import {Produit} from '../shareed/Produit';

@Injectable()
export class ProduitMockService{
 private PRODUITS: Produit[] = [];
  constructor(){
    let p1:Produit = new Produit('Livre', 50, 200);
    let p2:Produit = new Produit('stylo', 120, 30);
    let p3:Produit = new Produit('cahier', 70, 450);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
  }

  public getProduits() : Produit[]{
    return this.PRODUITS;
  }
}
