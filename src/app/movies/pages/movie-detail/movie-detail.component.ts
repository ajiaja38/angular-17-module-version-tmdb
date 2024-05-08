import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { ICast, IDetailMovie, IMovie } from '../../../types/movies.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { isPlatformBrowser } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
  animations: [
    trigger('slideInFromLeftSvg', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-5rem) translateY(-5rem)' }),
        animate(
          '1.5s ease-in-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-5rem)' }),
        animate(
          '1s ease-in-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
    ]),
    trigger('slideInFromTop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5rem)' }),
        animate(
          '1s ease-in-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
    ]),
  ],
})
export class MovieDetailComponent {
  id: number = 0;
  movie: IDetailMovie = {} as IDetailMovie;
  cast: ICast[] = [];
  similar: IMovie[] = [];
  window = inject;
  isBrowser: boolean;

  slideConfig = {
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  slideCastConfig = {
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  constructor(
    private readonly movieService: MovieService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.getDetailMovie();
    this.getCreditsMovie();
    this.getSimilarMovie();
  }

  getDetailMovie() {
    this.movieService.getDetailMovie(this.id).subscribe({
      next: (data) => {
        this.movie = data;
        this.titleService.setTitle(`Firelfex | ${this.movie.title}`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getCreditsMovie() {
    this.movieService.getCreditsMovie(this.id).subscribe({
      next: (data) => {
        this.cast = data.cast;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSimilarMovie() {
    this.movieService.getSimilarMovie(this.id).subscribe({
      next: (data) => {
        this.similar = data.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
