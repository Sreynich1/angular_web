import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products = [
    {
      title: 'Outfit A',
      price: 250,
      image: 'https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/shop_01.jpg',
    },
    {
      title: 'Outfit B',
      price: 250,
      image: 'https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/shop_01.jpg',
    },
    // Add more products as needed
  ];
}
