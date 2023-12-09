import { Component } from '@angular/core';
import { CountriesListComponent } from '../../utils/countries-list/countries-list.component';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CountriesListComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent { }
