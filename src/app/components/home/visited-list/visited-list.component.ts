import { Component } from '@angular/core';
import { CountriesListComponent } from '../../utils/countries-list/countries-list.component';

@Component({
  selector: 'app-visited-list',
  standalone: true,
  imports: [CountriesListComponent],
  templateUrl: './visited-list.component.html',
  styleUrl: './visited-list.component.scss'
})
export class VisitedListComponent { }
