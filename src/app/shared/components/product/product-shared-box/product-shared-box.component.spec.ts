import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSharedBoxComponent } from './product-shared-box.component';

describe('ProductSharedBoxComponent', () => {
  let component: ProductSharedBoxComponent;
  let fixture: ComponentFixture<ProductSharedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSharedBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSharedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
