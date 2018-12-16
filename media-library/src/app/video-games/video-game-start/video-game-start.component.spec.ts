import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameStartComponent } from './video-game-start.component';

describe('VideoGameStartComponent', () => {
  let component: VideoGameStartComponent;
  let fixture: ComponentFixture<VideoGameStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGameStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
