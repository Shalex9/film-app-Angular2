import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FilmService } from '../../film.service';
// import { PopularFilmsComponent } from '../../dashboard/popular-films/popular-films.component';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'input-film',
  templateUrl: './input-film.component.html',
  styleUrls: ['./input-film.component.css']
})
export class InputFilmComponent {
  filmNames: Array<string>
  filmName : string;
  filmList : Object[] = []
  loading: boolean = false;
  @Output() emitSearch: EventEmitter<string>;
  // @Input() filmName: string = "";

  constructor(
    private filmCardService: FilmService, 
    // private popularFilmsComponent: PopularFilmsComponent
    ) { 
      this.emitSearch = new EventEmitter<string>() 
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
  // setFilms(){
  //     // this.filmName = filmName;
  //     console.log('this.filmName', this.filmName)
  //     this.popularFilmsComponent.getFilmsBySearch(this.filmName)
  // }
  setServiceFilms(){
      console.log('filmName change in input = ', this.filmName)
      this.filmCardService.setSearchFilms(this.filmName);
          // into getFilmsBySearch
    //   this.filmName = filmName;
      this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
          this.filmList = data;
            console.log('SEARCH_FILMS list object', this.filmList)
      })
  }
  inputFilms() { this.emitSearch.emit(this.filmName); }

  reset() { this.filmName = "" }
}
