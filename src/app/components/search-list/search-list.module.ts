import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './search-list.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [SearchListComponent],
  imports: [CommonModule, RippleModule, ButtonModule],
  exports: [SearchListComponent],
})
export class SearchListModule {}
