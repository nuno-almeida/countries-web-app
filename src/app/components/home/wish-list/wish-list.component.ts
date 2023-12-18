import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../../../services/countries.service';
import { TabCountriesByRegionComponent } from '../../utils/tab-countries-by-region/tab-countries-by-region.component';
import { Country } from '../../../models/country';
import { CountriesByRegionMapPipe } from '../../../pipes/countries-by-region-map.pipe';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, TabCountriesByRegionComponent, CountriesByRegionMapPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  private service = inject(CountriesService);

  isLoading = () => this.service.loading();

  countries = () => Array.from(this.service.countries().values())
  .filter(country => (country as Country).isInWishList)
  .map(country => country as Country);
}
