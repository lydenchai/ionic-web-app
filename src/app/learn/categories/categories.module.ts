import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { IonicModule } from '@ionic/angular';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListingPage } from './categories-listing/categories-listing.page';

@NgModule({
  declarations: [CategoriesListingPage],
  imports: [CommonModule, IonicModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
