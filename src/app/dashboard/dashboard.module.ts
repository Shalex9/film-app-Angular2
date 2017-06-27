import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilmService } from '../film.service';

// import { NavbarModule} from '../shared/navbar/navbar.module';

import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { TopRatedFilmsComponent } from './top-rated-films/top-rated-films.component';
import { UpcomingFilmsComponent } from './upcoming-films/upcoming-films.component';
import { NowPlayingFilmsComponent } from './now-playing-films/now-playing-films.component';
import { SearchFilmsComponent } from './search-films/search-films.component';
import { SearchFilmComponent } from './search-film/search-film.component';
import { FilmCardXComponent } from './film-card-x/film-card-x.component';
import { FilmCardYComponent } from './film-card-y/film-card-y.component';
import { FilmCardSketchComponent } from './film-card-sketch/film-card-sketch.component';
import { CardViewComponent } from './card-view/card-view.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdButtonModule, 
        MdCheckboxModule,
        FlexLayoutModule,
        FormsModule,
        // NavbarModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ 
        MODULE_COMPONENTS, 
        PopularFilmsComponent, 
        TopRatedFilmsComponent, 
        UpcomingFilmsComponent, 
        NowPlayingFilmsComponent, 
        SearchFilmsComponent,
        SearchFilmComponent, 
        FilmCardXComponent,
        FilmCardYComponent,
        FilmCardSketchComponent,
        CardViewComponent,
        FilmDetailComponent,
        FavoritesComponent 
    ],
    providers: [ FilmService ]
})

export class DashboardModule{}
