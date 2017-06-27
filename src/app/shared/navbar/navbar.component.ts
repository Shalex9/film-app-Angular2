import { Component, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { ROUTES, ROUTESSEARCH } from '../.././sidebar/sidebar-routes.config';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FilmService } from '../../film.service';
import { InputFilmComponent } from '../input-film/input-film.component';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit{
    filmList : Object[] = []
    filmName : string
    loading: boolean = false
    private listTitles: any[]
    routeSearch: any
    location: Location
    amountFavorites: number = 0

    constructor(location:Location, private filmCardService: FilmService) {
        this.location = location;
    }
    getFilmsBySearch(filmName: string){
        this.filmName = filmName;
        this.loading = true;
        this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
            this.filmList = data;
            this.loading = false;
        })
    }
    setFilmsBySearch(filmName: string){
        this.filmName = filmName;
        console.log('this.filmName', this.filmName)
        // this.getFilmsBySearch();
        // this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
        //     this.filmList = data;
        // })
    }
    // @ViewChild("name", { read: ElementRef })
    // nameFilm: ElementRef;
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.routeSearch = ROUTESSEARCH;
    } 
    ngOnChanges(changes: SimpleChanges) {
          console.log("Hook, Проперти в дочернем компоненте поменялись")
    }   
    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return this.routeSearch.title;
    }
}
