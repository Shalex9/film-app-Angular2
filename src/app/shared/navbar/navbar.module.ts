import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilmService } from '../../film.service';

import { InputFilmComponent } from '../input-film/input-film.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule, 
        CommonModule, 
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdButtonModule, 
        MdCheckboxModule,
        FlexLayoutModule 
    ],
    declarations: [ 
        NavbarComponent, 
        InputFilmComponent 
    ],
    exports: [ NavbarComponent ],
    providers: [ FilmService ]
})

export class NavbarModule {}
