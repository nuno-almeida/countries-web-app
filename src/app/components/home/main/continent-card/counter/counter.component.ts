import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CounterValueComponent } from '../../../../utils/counter-value/counter-value.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, CounterValueComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input({ required: true })
  type!: string;

  @Input({ required: true })
  regionId!: string;
}
