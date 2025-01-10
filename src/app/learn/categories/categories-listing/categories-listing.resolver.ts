import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { AppService } from 'src/app/services/app.service';

@Injectable()
export class CategoriesListingResolver implements Resolve<any> {
  constructor(private appService: AppService) {}

  resolve(): Observable<Category[]> {
    return this.appService.getCategories();
  }
}
