import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello world';
  image: string = "https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_02.jpg"
  constructor(private router: Router) {}

  showHeaderAndFooter(): boolean {
    // Hide navbar and footer for the search route
    return this.router.url !== '/search';
  }

}

