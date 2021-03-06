import { Component, OnInit, Output } from '@angular/core';
import { FilmService } from '../../film.service';
import { SearchFilmsComponent } from '../search-films/search-films.component';
// import { InputFilmComponent } from '../../shared/input-film/input-film.component';

@Component({
  selector: 'search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})

export class SearchFilmComponent implements OnInit {
  filmList : Object[] = []
  filmName : string;
  loading: boolean = false;
  totalResult : string;
  index: number = 1;
  newIndex: number;
  max: number;
  selectedView: string = "yCards";

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    // this.filmName = "home"
    // this.getInitFilms();
    this.getFilmsBySearch(this.filmName)
  }
  // ifInputSearchIsEmpty(): boolean {
  //   return this.filmName === undefined;
  // }
  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }
  setNewCardView(newCardView: string) {
    this.selectedView = newCardView;
  }
  // getInitFilms(){
  //   this.loading = true;
  //   this.filmCardService.getInitSearchFilms(this.filmName).subscribe(data => {
  //     this.filmList = data;
  //     this.loading = false;
  //   })
  // } 
  // getFilms(){
  //   this.loading = true;
  //   this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
  //     this.filmList = data;
  //     this.loading = false;
  //   })
  // } 
  getFilmsBySearch(filmName: string){
    this.filmName = filmName;
    this.loading = true;
    this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.loading = false;
    })
  }
  addSearchFilms(index: number, newIndex: number){
    this.loading = true;
    this.max = this.filmList.length-1;
    if(this.index < this.max) {this.newIndex = this.index++;}
    this.filmCardService.getNextSearchFilms(this.filmName, this.index, this.newIndex).subscribe(data => {
      this.filmList = [...this.filmList, ...data] 
      this.loading = false;
    }
  )}
  private next(filmName: string, index: number, newIndex: number){
    this.max = this.filmList.length-1;
    if(this.index < this.max) {this.newIndex = this.index++;}
    this.filmCardService.getNextSearchFilms(this.filmName, this.index, this.newIndex).subscribe(data => {
      this.filmList = data;
    })
  } 
  private prev(filmName: string, index: number, newIndex: number) {
    this.max = this.filmList.length-1;
    if(this.index > 1) {this.index--}
    this.filmCardService.getNextSearchFilms(this.filmName, this.index, this.newIndex).subscribe(data => {
      this.filmList = data;
    })
  }
}
