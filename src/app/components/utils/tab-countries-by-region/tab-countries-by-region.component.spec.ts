import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCountriesByRegionComponent } from './tab-countries-by-region.component';

describe('TabCountriesByRegionComponent', () => {
  let component: TabCountriesByRegionComponent;
  let fixture: ComponentFixture<TabCountriesByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCountriesByRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabCountriesByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
