import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterValueComponent } from './counter-value.component';

describe('CounterValueComponent', () => {
  let component: CounterValueComponent;
  let fixture: ComponentFixture<CounterValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
