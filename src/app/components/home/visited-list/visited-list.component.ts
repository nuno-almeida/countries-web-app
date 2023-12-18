import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { TabCountriesByRegionComponent } from '../../utils/tab-countries-by-region/tab-countries-by-region.component';
import { Country } from '../../../models/country';
import { CountriesByRegionMapPipe } from '../../../pipes/countries-by-region-map.pipe';

@Component({
  selector: 'app-visited-list',
  standalone: true,
  imports: [CommonModule, TabCountriesByRegionComponent, CountriesByRegionMapPipe],
  templateUrl: './visited-list.component.html',
  styleUrl: './visited-list.component.scss'
})
export class VisitedListComponent {

  private service = inject(CountriesService);

  isLoading = () => this.service.loading();

  countries = () => Array.from(this.service.countries().values())
    .filter(country => (country as Country).isInVisitedList)
    .map(country => country as Country);
}
