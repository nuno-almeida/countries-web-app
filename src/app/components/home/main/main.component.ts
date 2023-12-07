import { Continent } from './../../../models/enums';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContinentCardComponent } from './continent-card/continent-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, ContinentCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public data: {
    id: Continent;
    title: string;
  }[] = [
    { id: Continent.Africa, title: 'Africa' },
    { id: Continent.America, title: 'America' },
    { id: Continent.Asica, title: 'Asia' },
    { id: Continent.Europe, title: 'Europe' },
    { id: Continent.Oceania, title: 'Oceania' },
  ];
}
