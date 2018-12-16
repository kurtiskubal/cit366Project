import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameListComponent } from './video-game-list.component';

describe('VideoGameListComponent', () => {
  let component: VideoGameListComponent;
  let fixture: ComponentFixture<VideoGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
