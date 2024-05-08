import { Component, Input } from '@angular/core';
import { IMovie } from '../../../types/movies.interface';

@Component({
  selector: 'app-card-now-playing',
  templateUrl: './card-now-playing.component.html',
  styleUrl: './card-now-playing.component.scss',
})
export class CardNowPlayingComponent {
  @Input() nowPlaying!: IMovie;
}
