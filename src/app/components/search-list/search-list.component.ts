import { Component, Input } from '@angular/core';
import { IMovie } from '../../types/movies.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input('query') query: string = '';
  movies: IMovie[] = [];
  private searchSubject = new Subject<string>();
  isLoading: boolean = false;

  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router
  ) {
    this.searchSubject
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        switchMap((query: string) => this.movieService.searchMovies(query))
      )
      .subscribe({
        next: (data) => {
          this.movies = data.results;
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
      });
  }

  ngOnChanges() {
    this.isLoading = true;
    this.searchSubject.next(this.query);
  }

  navigateToMovie(id: number) {
    this.router.navigate(['/movie', id]);
    this.query = '';
  }
}
