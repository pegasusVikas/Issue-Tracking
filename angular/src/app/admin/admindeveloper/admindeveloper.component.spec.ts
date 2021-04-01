import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeveloperComponent } from './admindeveloper.component';

describe('AdmindeveloperComponent', () => {
  let component: AdmindeveloperComponent;
  let fixture: ComponentFixture<AdmindeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
