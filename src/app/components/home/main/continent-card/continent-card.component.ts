import { Component, Input, inject } from '@angular/core';
import { Continent } from '../../../../models/enums';
import { CounterComponent } from './counter/counter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continent-card',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './continent-card.component.html',
  styleUrl: './continent-card.component.scss',
})
export class ContinentCardComponent {
private router = inject(Router);

  @Input({ required: true })
  public continent: { id: Continent; title: string } = {
    id: Continent.africa,
    title: '',
  };

  onClick(): void {
    this.router.navigateByUrl('countries/' + Continent[this.continent.id]);
  }
}
