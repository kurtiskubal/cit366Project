import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameItemComponent } from './video-game-item.component';

describe('VideoGameItemComponent', () => {
  let component: VideoGameItemComponent;
  let fixture: ComponentFixture<VideoGameItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGameItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
