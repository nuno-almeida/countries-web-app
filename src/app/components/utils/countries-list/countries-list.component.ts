import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../../../services/countries.service';
import { CountriesCardComponent } from '../countries-card/countries-card.component';
import { Country } from '../../../models/auth';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountriesCardComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent {
  private service = inject(CountriesService);

  // value of wish, visited or regionId
  @Input({ required: true }) typeId!: string;

  isLoading = () => this.service.loading();

  countries = () => {
    if (this.typeId === 'wish') {
      return Array.from(this.service.countries().values())
        .filter(country => (country as Country).isInWishList)
        .map(country => country as Country);
    }

    if (this.typeId === 'visited') {
      return Array.from(this.service.countries().values())
        .filter(country => (country as Country).isInVisitedList)
        .map(country => country as Country);
    }

    const countriesMap = this.service.countries();
    const regionCountriesIds = this.service.countriesIdsByRegion().get(this.typeId!);

    return Array.from(countriesMap.entries())
      .filter(entry => regionCountriesIds!.includes(entry[0]))
      .map(entry => entry[1] as Country);
  }
}
