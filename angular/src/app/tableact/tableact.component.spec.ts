import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableactComponent } from './tableact.component';

describe('TableactComponent', () => {
  let component: TableactComponent;
  let fixture: ComponentFixture<TableactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
