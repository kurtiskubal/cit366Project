import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { TvShowDetailComponent } from './tv-shows/tv-show-detail/tv-show-detail.component';
import { TvShowEditComponent } from './tv-shows/tv-show-edit/tv-show-edit.component';
import { TvShowStartComponent } from './tv-shows/tv-show-start/tv-show-start.component';
import { TvShowListComponent } from './tv-shows/tv-show-list/tv-show-list.component';
import { TvShowItemComponent } from './tv-shows/tv-show-list/tv-show-item/tv-show-item.component';
import { VideoGameDetailComponent } from './video-games/video-game-detail/video-game-detail.component';
import { VideoGameEditComponent } from './video-games/video-game-edit/video-game-edit.component';
import { VideoGameListComponent } from './video-games/video-game-list/video-game-list.component';
import { VideoGameStartComponent } from './video-games/video-game-start/video-game-start.component';
import { VideoGameItemComponent } from './video-games/video-game-list/video-game-item/video-game-item.component';
import { DropdownDirective } from '../app/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    TvShowsComponent,
    VideoGamesComponent,
    MovieStartComponent,
    MovieEditComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieItemComponent,
    TvShowDetailComponent,
    TvShowEditComponent,
    TvShowStartComponent,
    TvShowListComponent,
    TvShowItemComponent,
    VideoGameDetailComponent,
    VideoGameEditComponent,
    VideoGameListComponent,
    VideoGameStartComponent,
    VideoGameItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
