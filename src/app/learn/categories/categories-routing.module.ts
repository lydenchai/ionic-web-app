import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListingPage } from './categories-listing/categories-listing.page';
import { CategoriesListingResolver } from './categories-listing/categories-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListingPage,
    // resolve: {
    //   categories: CategoriesListingResolver,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [CategoriesListingResolver],
})
export class CategoriesRoutingModule {}
