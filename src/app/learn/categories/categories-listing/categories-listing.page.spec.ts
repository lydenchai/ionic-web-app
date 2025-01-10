import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesListingPage } from './categories-listing.page';

describe('CategoriesListingPage', () => {
  let component: CategoriesListingPage;
  let fixture: ComponentFixture<CategoriesListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
