import { animate, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
        style({ opacity: 0, transform: 'scale(.8) translateY(-5rem)' }),
        animate(
          '1s ease-in-out',
          style({ opacity: 1, transform: 'scale(1.1) translateX(0%)' })
        ),
        animate('0.4s ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  constructor(private readonly viewportScroller: ViewportScroller) {}

  scrollToElement(): void {
    this.viewportScroller.scrollToAnchor('now-playing');
  }
}
