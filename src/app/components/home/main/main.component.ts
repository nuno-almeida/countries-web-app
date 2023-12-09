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
    { id: Continent.africa, title: 'Africa' },
    { id: Continent.americas, title: 'America' },
    { id: Continent.asia, title: 'Asia' },
    { id: Continent.europe, title: 'Europe' },
    { id: Continent.oceania, title: 'Oceania' },
  ];
}
