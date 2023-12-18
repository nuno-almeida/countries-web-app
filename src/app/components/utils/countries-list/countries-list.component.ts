import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesCardComponent } from '../countries-card/countries-card.component';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountriesCardComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent {
  @Input({ required: true }) countries!: Country[];
}
