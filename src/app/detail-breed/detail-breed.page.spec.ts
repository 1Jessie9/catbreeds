import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBreedPage } from './detail-breed.page';

describe('DetailBreedPage', () => {
  let component: DetailBreedPage;
  let fixture: ComponentFixture<DetailBreedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBreedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
