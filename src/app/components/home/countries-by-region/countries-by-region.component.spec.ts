import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByRegionComponent } from './countries-by-region.component';

describe('CountriesByRegionComponent', () => {
  let component: CountriesByRegionComponent;
  let fixture: ComponentFixture<CountriesByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesByRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
