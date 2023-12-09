import { Component, Input, inject } from '@angular/core';
import { Country } from '../../../models/auth';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-countries-card',
  standalone: true,
  imports: [],
  templateUrl: './countries-card.component.html',
  styleUrl: './countries-card.component.scss'
})
export class CountriesCardComponent {

  private service = inject(CountriesService);

  @Input({ required: true })
  country: Country | undefined

  toggleVisited() {
    this.service.updateVisited(this.country?.id!, !this.country?.isInVisitedList!);
  }

  toggleWished() {
    this.service.updateWished(this.country?.id!, !this.country?.isInWishList!);
  }
}
