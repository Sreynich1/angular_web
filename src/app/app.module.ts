import { RouterOutlet, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
const routes:Routes=[
  {path:'',component:HomeComponent },
  {path:'about',component:AboutComponent },
  {path:'contact',component:ContactComponent },
  {path:'shop',component:ShopComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent,
    SearchComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
