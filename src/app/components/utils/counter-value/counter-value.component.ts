import { Component, Input, inject } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-counter-value',
  standalone: true,
  imports: [],
  templateUrl: './counter-value.component.html',
  styleUrl: './counter-value.component.scss'
})
export class CounterValueComponent {
  private service = inject(CountriesService);

  @Input()
  regionId: string | undefined = undefined;

  @Input({required: true})
  type!: string;

  private wishedCounters = () => this.service.wishedCounters();
  private visitedCounters = () => this.service.visitedCounters();

  value = () => {
    if (this.type === 'wish') {
      const counter = this.wishedCounters();
      return !!this.regionId ? counter.byRegion.get(this.regionId)! : counter.total;
    } 
    
    if (this.type === 'visited') {
      const counter = this.visitedCounters();
     return !!this.regionId ? counter.byRegion.get(this.regionId)! : counter.total;
    }

    return 0;
  }
}
