import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedListComponent } from './visited-list.component';

describe('VisitedListComponent', () => {
  let component: VisitedListComponent;
  let fixture: ComponentFixture<VisitedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
