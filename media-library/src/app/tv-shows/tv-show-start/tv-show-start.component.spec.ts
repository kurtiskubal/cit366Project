import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowStartComponent } from './tv-show-start.component';

describe('TvShowStartComponent', () => {
  let component: TvShowStartComponent;
  let fixture: ComponentFixture<TvShowStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
