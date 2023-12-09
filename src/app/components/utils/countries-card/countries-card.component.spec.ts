import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCardComponent } from './countries-card.component';

describe('CountriesCardComponent', () => {
  let component: CountriesCardComponent;
  let fixture: ComponentFixture<CountriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
