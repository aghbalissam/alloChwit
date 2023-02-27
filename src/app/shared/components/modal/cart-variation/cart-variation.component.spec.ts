import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartVariationComponent } from './cart-variation.component';

describe('CartVariationComponent', () => {
  let component: CartVariationComponent;
  let fixture: ComponentFixture<CartVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartVariationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
