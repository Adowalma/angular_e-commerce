import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = signal<Product[]>([
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
    {
      id: 3,
      title: 'Something 3',
      price: 109.9,
      image:'https://i.ibb.co/BcqzzgF/Consola-Play-Station-5.png',  
    },
    {
      id: 4,
      title: 'Something 4',
      price: 109.9,
      image:'https://i.ibb.co/ZHT2r1s/C-mara-Sony-Alpha-A7-III.png', 
      stock: 5 
    },

  ])
}
