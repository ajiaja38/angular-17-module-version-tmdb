import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { OverviewPipe } from './pipes/overview.pipe';
import { CardNowPlayingComponent } from './components/card-now-playing/card-now-playing.component';
import { BadgeModule } from 'primeng/badge';
import { RouterLink } from '@angular/router';
import { RatingPipe } from './pipes/rating.pipe';
import { SkeletonModule } from 'primeng/skeleton';
import { ChipModule } from 'primeng/chip';
import { HeaderSkeletonComponent } from './components/header-skeleton/header-skeleton.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    HeaderComponent,
    CardComponent,
    BadgeComponent,
    OverviewPipe,
    CardNowPlayingComponent,
    RatingPipe,
    HeaderSkeletonComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ButtonModule,
    RippleModule,
    CarouselModule,
    TagModule,
    BadgeModule,
    RouterLink,
    SkeletonModule,
    ChipModule,
    SlickCarouselModule,
    PipesModule,
  ],
  exports: [CardNowPlayingComponent, RatingPipe],
})
export class MoviesModule {}
