import { Component, OnInit, Output } from '@angular/core';
import { FilmService } from '../../film.service';

@Component({
  selector: 'favorites-films',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  filmFavoritesList: any[] = []
  filmList : any[] = []
  filmName : string;
  filmItem : any;
  loading: boolean = false;
  totalResult : string;
  index: number = 1;
  newIndex: number;
  max: number;
  selectedView: string = "yCards";
  filmIDList : any[] = []
  filmIDItem : any;

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = ""
    this.getFavoritesFilms();
    // this.transferToServiceIDList();
  }
  isFilmListEmpty(): boolean {
    return this.filmList && !this.filmList.length;
  }
  setNewCardView(newCardView: string) {
    this.selectedView = newCardView;
  }
  getFavoritesFilms(){
    this.loading = true;
    this.filmCardService.getFavoritesItem().subscribe(data => {
      this.filmFavoritesList = data;
      // console.log("Get This Film in Favorites = ", data);
      for(let filmFavoriteItem of this.filmFavoritesList) {
        this.filmItem = filmFavoriteItem.jsonFilm;
        // console.log("filmItem of this.filmList Favorites.TS", this.filmItem);
        this.filmList = [...this.filmList, ...this.filmItem];
        // console.log("Favorites filmList", this.filmList);
        this.filmIDItem = filmFavoriteItem.jsonFilm.id;
        // console.log("filmIDItem of filmList Favorites.TS", this.filmIDItem);
        this.filmIDList = [...this.filmIDList, ...this.filmIDItem];
        console.log("Favorites filmIDList", this.filmIDList);
      }
      this.filmCardService.setFavoritesIDList(this.filmIDList);
      this.loading = false;
    })
  }
  // transferToServiceIDList(){
  //   this.filmIDList = [...this.filmIDList, ...this.filmIDItem];
  //   console.log("Favorites filmIDList", this.filmIDList);
  //   this.filmCardService.getFavoritesIDList(this.filmIDList);
  // } 
  getFilmsBySearch(filmName: string){
    this.filmName = filmName;
    this.loading = true;
    this.filmCardService.getSearchFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.loading = false;
    })
  }
  // addFavoritesFilms(index: number, newIndex: number){
  //   this.loading = true;
  //   this.max = this.filmList.length-1;
  //   if(this.index < this.max) {this.newIndex = this.index++;}
  //   this.filmCardService.getNextFavoritesFilms(this.index, this.newIndex).subscribe(data => {
  //     this.filmList = [...this.filmList, ...data] 
  //     this.loading = false;
  //   }
  // )}
  // private next(filmName: string, index: number, newIndex: number){
  //   this.max = this.filmList.length-1;
  //   if(this.index < this.max) {this.newIndex = this.index++;}
  //   this.filmCardService.getNextFavoritesFilms(this.index, this.newIndex).subscribe(data => {
  //     this.filmList = data;
  //   })
  // } 
  // private prev(filmName: string, index: number, newIndex: number) {
  //   this.max = this.filmList.length-1;
  //   if(this.index > 1) {this.index--}
  //   this.filmCardService.getNextFavoritesFilms(this.index, this.newIndex).subscribe(data => {
  //     this.filmList = data;
  //   })
  // }
}
