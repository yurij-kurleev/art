import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExhibitionsComponent } from './admin-exhibitions.component';

describe('AdminExhibitionsComponent', () => {
  let component: AdminExhibitionsComponent;
  let fixture: ComponentFixture<AdminExhibitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExhibitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
