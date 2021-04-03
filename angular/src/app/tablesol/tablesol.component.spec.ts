import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesolComponent } from './tablesol.component';

describe('TablesolComponent', () => {
  let component: TablesolComponent;
  let fixture: ComponentFixture<TablesolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
