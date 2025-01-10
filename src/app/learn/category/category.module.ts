import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDetailPage } from './category-detail/category-detail.page';

@NgModule({
  declarations: [CategoryDetailPage],
  imports: [CommonModule, FormsModule, IonicModule, CategoryRoutingModule],
})
export class CategoryModule {}
