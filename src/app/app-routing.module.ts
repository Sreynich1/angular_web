import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
 { path: 'contact',
  component: ContactComponent
},
{ path: 'search',
  component: SearchComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {path:'**',component:ErrorPageComponent},
  { path: '', component: ShopComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
