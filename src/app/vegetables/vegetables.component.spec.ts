import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesComponent } from './vegetables.component';

describe('VegetablesComponent', () => {
  let component: VegetablesComponent;
  let fixture: ComponentFixture<VegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
