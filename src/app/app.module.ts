import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdAutocompleteModule } from '@angular/material';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilmService } from './film.service';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdAutocompleteModule,
    BrowserModule,
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    RouterModule.forRoot([])
  ],
  providers: [FilmService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
