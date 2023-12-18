import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../../../models/country';
import { CountriesListComponent } from '../countries-list/countries-list.component';

@Component({
  selector: 'app-tab-countries-by-region',
  standalone: true,
  imports: [CommonModule, CountriesListComponent],
  templateUrl: './tab-countries-by-region.component.html',
  styleUrl: './tab-countries-by-region.component.scss'
})
export class TabCountriesByRegionComponent {

  @Input({required: true})
  region!: string;

  @Input({required: true})
  countries!: Country[];

  show = false;
  
  toggle() {
    this.show = !this.show;
  }
}
