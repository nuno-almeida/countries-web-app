import { Component, Input } from '@angular/core';
import { CountriesListComponent } from '../../utils/countries-list/countries-list.component';

@Component({
  selector: 'app-countries-by-region',
  standalone: true,
  imports: [CountriesListComponent],
  templateUrl: './countries-by-region.component.html',
  styleUrl: './countries-by-region.component.scss'
})
export class CountriesByRegionComponent {
  // private activatedRoute = inject(ActivatedRoute);
  // private regionId = this.activatedRoute.snapshot.params['regionId'];
  @Input() regionId!: string;
}
