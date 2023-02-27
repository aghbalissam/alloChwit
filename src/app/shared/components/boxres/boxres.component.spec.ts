import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxresComponent } from './boxres.component';

describe('BoxresComponent', () => {
  let component: BoxresComponent;
  let fixture: ComponentFixture<BoxresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
