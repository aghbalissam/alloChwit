import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOneBoxComponent } from './product-one-box.component';

describe('ProductOneBoxComponent', () => {
  let component: ProductOneBoxComponent;
  let fixture: ComponentFixture<ProductOneBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOneBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOneBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
