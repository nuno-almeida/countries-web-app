import { Component, Input, OnInit, inject } from '@angular/core';
import { CountriesListComponent } from '../../utils/countries-list/countries-list.component';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-countries-by-region',
  standalone: true,
  imports: [CountriesListComponent],
  templateUrl: './countries-by-region.component.html',
  styleUrl: './countries-by-region.component.scss'
})
export class CountriesByRegionComponent implements OnInit {
  private service = inject(CountriesService);
  // private activatedRoute = inject(ActivatedRoute);
  // private regionId = this.activatedRoute.snapshot.params['regionId'];
  @Input() regionId!: string;

  countries: Country[] = [];

  isLoading = () => this.service.loading();

  ngOnInit(): void {
    const regionCountriesIds = this.service.countriesIdsByRegion().get(this.regionId);
    this.countries = Array.from(this.service.countries().entries())
      .filter(entry => regionCountriesIds!.includes(entry[0]))
      .map(entry => entry[1] as Country);
  }
}
