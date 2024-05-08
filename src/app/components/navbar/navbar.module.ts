import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SearchListModule } from '../search-list/search-list.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    RouterLink,
    SearchListModule,
    ReactiveFormsModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
