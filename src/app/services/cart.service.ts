import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Something 1',
      price: 109.9,
      image:'https://i.ibb.co/ZHT2r1s/C-mara-Sony-Alpha-A7-III.png', 
      stock: 10,
    },
    {
      id: 2,
      title: 'Something 2',
      price: 109.9,
      image:'https://i.ibb.co/BcqzzgF/Consola-Play-Station-5.png', 
      stock: 0,
    },
  ]);

  addToCart(product: Product){
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id:number){
    this.cart.set(this.cart().filter((p)=> p.id !== id))
  }

  constructor() { }
}
