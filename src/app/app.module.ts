import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-edit/product-detail.component';

@NgModule({
  declarations: [					
    AppComponent,
      ProductAddComponent,
      ProductsComponent,
      ProductDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
