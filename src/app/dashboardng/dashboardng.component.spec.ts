import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardngComponent } from './dashboardng.component';

describe('DashboardngComponent', () => {
  let component: DashboardngComponent;
  let fixture: ComponentFixture<DashboardngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
