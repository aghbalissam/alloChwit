import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxproductComponent } from './boxproduct.component';

describe('BoxproductComponent', () => {
  let component: BoxproductComponent;
  let fixture: ComponentFixture<BoxproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
