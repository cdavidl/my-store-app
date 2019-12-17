import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products = products;

  share() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Se le notificará cuando el producto salga a la venta.');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
