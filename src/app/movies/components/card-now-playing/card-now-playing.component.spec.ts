import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNowPlayingComponent } from './card-now-playing.component';

describe('CardNowPlayingComponent', () => {
  let component: CardNowPlayingComponent;
  let fixture: ComponentFixture<CardNowPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNowPlayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
