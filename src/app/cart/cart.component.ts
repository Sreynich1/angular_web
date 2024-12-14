import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  value: number = 12;

  increase(): void {
    this.value++;
  }

  decrease(): void {
    if (this.value > 0) {
      this.value--;
    }
  }
  images: string[] = [
    '../..//public/assets/product_single_07.jpg',
    '../..//public/assets/product_single_08.jpg',
    '../..//public/assets/product_single_09.jpg',
    '../..//public/assets/product_single_10 (1).jpg',
  ]; // Add your image paths here
  selectedImage: string = this.images[0];

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
