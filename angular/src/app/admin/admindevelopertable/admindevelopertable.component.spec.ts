import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindevelopertableComponent } from './admindevelopertable.component';

describe('AdmindevelopertableComponent', () => {
  let component: AdmindevelopertableComponent;
  let fixture: ComponentFixture<AdmindevelopertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindevelopertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindevelopertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
