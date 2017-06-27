import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SearchFilmComponent } from './search-film/search-film.component';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { NowPlayingFilmsComponent } from './now-playing-films/now-playing-films.component';
import { TopRatedFilmsComponent } from './top-rated-films/top-rated-films.component';
import { UpcomingFilmsComponent } from './upcoming-films/upcoming-films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const MODULE_ROUTES: Route[] =[
    { path: '', component: HomeComponent },
    { path: 'search-film', component: SearchFilmComponent },
    { path: 'popular-films', component: PopularFilmsComponent },
    { path: 'now-playing-films', component: NowPlayingFilmsComponent },
    { path: 'top-rated-films', component: TopRatedFilmsComponent },
    { path: 'upcoming-films', component: UpcomingFilmsComponent },
    { path: 'film-detail', component: FilmDetailComponent },
    { path: 'favorites-films', component: FavoritesComponent },
    { path: '**', redirectTo: '/' }
]

export const MODULE_COMPONENTS = [ HomeComponent ]
