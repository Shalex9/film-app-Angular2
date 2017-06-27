import { Component, OnInit, Output } from '@angular/core';
import { FilmService } from '../../film.service';
import { SearchFilmsComponent } from '../search-films/search-films.component';

@Component({
  selector: 'popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.css']
})

export class PopularFilmsComponent implements OnInit {
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
    this.filmName = ""
    this.getPopularFilms();
  }
  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }
  setNewCardView(newCardView: string) {
    this.selectedView = newCardView;
  }
  getPopularFilms(){
    this.loading = true;
    this.filmCardService.getPopularFilms().subscribe(data => {
      this.filmList = data;
      // console.log("dataLIST Popular.TS", data)
      this.loading = false;
    })
  } 
  getFilmsBySearch(filmName: string){
    this.filmName = filmName;
    this.loading = true;
    this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.loading = false;
    })
  }
  addPopularFilms(index: number, newIndex: number){
    this.loading = true;
    this.max = this.filmList.length-1;
    if(this.index < this.max) {this.newIndex = this.index++;}
    this.filmCardService.getNextPopularFilms(this.index, this.newIndex).subscribe(data => {
      this.filmList = [...this.filmList, ...data] 
      this.loading = false;
    }
  )}
  private next(filmName: string, index: number, newIndex: number){
    this.max = this.filmList.length-1;
    if(this.index < this.max) {this.newIndex = this.index++;}
    this.filmCardService.getNextPopularFilms(this.index, this.newIndex).subscribe(data => {
      this.filmList = data;
    })
  } 
  private prev(filmName: string, index: number, newIndex: number) {
    this.max = this.filmList.length-1;
    if(this.index > 1) {this.index--}
    this.filmCardService.getNextPopularFilms(this.index, this.newIndex).subscribe(data => {
      this.filmList = data;
    })
  }
}
