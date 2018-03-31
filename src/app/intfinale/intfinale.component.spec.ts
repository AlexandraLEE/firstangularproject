import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntfinaleComponent } from './intfinale.component';

describe('IntfinaleComponent', () => {
  let component: IntfinaleComponent;
  let fixture: ComponentFixture<IntfinaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntfinaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntfinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
