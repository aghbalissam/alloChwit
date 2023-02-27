import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSingleComponent } from './breadcrumb-single.component';

describe('BreadcrumbSingleComponent', () => {
  let component: BreadcrumbSingleComponent;
  let fixture: ComponentFixture<BreadcrumbSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
