import { Component } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { IMovie } from '../../../types/movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  nowPlaying: IMovie[] = [];
  popularMovies: IMovie[] = [];
  topRated: IMovie[] = [];
  responsiveOptions: any[] | undefined;

  slideConfig = {
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  constructor(private readonly moviesService: MovieService) {}

  ngOnInit() {
    this.moviesService.getNowPlayingMovies().subscribe({
      next: (data) => {
        this.nowPlaying = data.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.moviesService.getPopularMovies().subscribe({
      next: (data) => {
        this.popularMovies = data.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.moviesService.getTopRatedMovies().subscribe({
      next: (data) => {
        this.topRated = data.results;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
