import { Component, Input } from '@angular/core';
import { IMovie } from '../../../types/movies.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() movie!: IMovie;
}
