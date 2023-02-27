import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTwoBoxComponent } from './product-two-box.component';

describe('ProductTwoBoxComponent', () => {
  let component: ProductTwoBoxComponent;
  let fixture: ComponentFixture<ProductTwoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTwoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTwoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
