import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreationsComponent } from './admin-creations.component';

describe('AdminCreationsComponent', () => {
  let component: AdminCreationsComponent;
  let fixture: ComponentFixture<AdminCreationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
