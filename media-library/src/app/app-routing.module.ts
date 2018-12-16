import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvShowStartComponent } from './tv-shows/tv-show-start/tv-show-start.component';
import { TvShowEditComponent } from './tv-shows/tv-show-edit/tv-show-edit.component';
import { TvShowDetailComponent } from './tv-shows/tv-show-detail/tv-show-detail.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGameStartComponent } from './video-games/video-game-start/video-game-start.component';
import { VideoGameEditComponent } from './video-games/video-game-edit/video-game-edit.component';
import { VideoGameDetailComponent } from './video-games/video-game-detail/video-game-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: "movies", component: MoviesComponent, children: [
    {path: '', component: MovieStartComponent},
    {path: 'new', component: MovieEditComponent},
    {path: ':id', component: MovieDetailComponent},
    {path: ':id/edit', component: MovieEditComponent}
  ]},
  {path: "tv", component: TvShowsComponent, children: [
    {path: '', component: TvShowStartComponent},
    {path: 'new', component: TvShowEditComponent},
    {path: ':id', component: TvShowDetailComponent},
    {path: ':id/edit', component: TvShowEditComponent}
  ]},
  {path: "video-games", component: VideoGamesComponent, children: [
    {path: '', component: VideoGameStartComponent},
    {path: 'new', component: VideoGameEditComponent},
    {path: ':id', component: VideoGameDetailComponent},
    {path: ':id/edit', component: VideoGameEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
