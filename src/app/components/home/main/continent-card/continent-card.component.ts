import { Component, Input } from '@angular/core';
import { Continent } from '../../../../models/enums';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-continent-card',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './continent-card.component.html',
  styleUrl: './continent-card.component.scss',
})
export class ContinentCardComponent {
  @Input({ required: true })
  public continent: { id: Continent; title: string } = {
    id: Continent.Africa,
    title: '',
  };

  onClick(): void {
    // TODO go to REGION
    console.log(this.continent.id);
  }

  // TODO onClick on counter show the specify region selected
  // The wish and visited page could be splitted by section per region
}
