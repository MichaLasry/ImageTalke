import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsComponent } from './emotions.component';

describe('EmotionsComponent', () => {
  let component: EmotionsComponent;
  let fixture: ComponentFixture<EmotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
