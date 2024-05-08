import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './components/navbar/navbar.module';
import { FooterModule } from './components/footer/footer.module';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { SearchListModule } from './components/search-list/search-list.module';
import { PipesModule } from './pipes/pipes.module';
import { cancelSameApiRequestInterceptor } from './interceptors/cancel-same-api.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FooterModule,
    SearchListModule,
    PipesModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([cancelSameApiRequestInterceptor])
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
