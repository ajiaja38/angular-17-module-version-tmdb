import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseYearPipe } from './year/release-year.pipe';

@NgModule({
  declarations: [ReleaseYearPipe],
  imports: [CommonModule],
  exports: [ReleaseYearPipe],
})
export class PipesModule {}
