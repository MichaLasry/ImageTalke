import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookwareComponent } from './cookware.component';

describe('CookwareComponent', () => {
  let component: CookwareComponent;
  let fixture: ComponentFixture<CookwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
