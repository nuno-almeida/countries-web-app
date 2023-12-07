import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentCardComponent } from './continent-card.component';

describe('ContinentCardComponent', () => {
  let component: ContinentCardComponent;
  let fixture: ComponentFixture<ContinentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
