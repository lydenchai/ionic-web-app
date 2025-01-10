import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'learn',
    pathMatch: 'full',
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./learn/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'learn/:category',
    loadChildren: () =>
      import('./learn/category/category.module').then((m) => m.CategoryModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
