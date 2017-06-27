import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SearchFilter } from './shared/model'

@Injectable()
export class FilmService {
  movieUrl: string = "https://api.themoviedb.org/3/movie/";
  searchUrl: string = "https://api.themoviedb.org/3/search/movie";
  apiKey: string = "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade";
  language: string = "&language=ru-RU";
  include: string = "&include_adult=false";
  pageIndex: number = 1;
  title: string
  filmName: string;
  filmItem: object
  data: any;
  currentFilmId: string
  
  constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    body = body.results || body;
    return body || {};
  }
 
  private extractGalleryData(res: Response) {
    let body = res.json();
    return body;
  }
//MongoDB
  getFavoritesItem () {
    return this.http.get("http://localhost:4200/getFavoritesList").map(this.extractGalleryData);
  }
//MongoDB
  saveFavoriteItem (filmItem) {
      // console.log('title in service =', title);
      this.filmItem = filmItem;
      // console.log('filmItem in service =', filmItem);
      let favorite = {jsonFilm: filmItem};
      // console.log('favorite service =', favorite);
      return this.http.post("http://localhost:4200/saveFavoriteItem", favorite).map(this.extractGalleryData);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.movieUrl + filmId + this.apiKey + this.language).map(this.extractListData);
  }
  setFilmId(currentFilmId: string) {
    this.currentFilmId = currentFilmId;
    // console.log('SET currentFilmId in Service ID', this.currentFilmId);
    // return this.http.get(this.movieUrl + this.currentFilmId + this.apiKey + this.language).map(this.extractListData);
  }
  returnFilmId(filmId: string) {
    filmId = this.currentFilmId;
    // console.log('SET returnFilmId in Service ID', this.currentFilmId);
    return this.http.get(this.movieUrl + this.currentFilmId + this.apiKey + this.language).map(this.extractListData);
  }
  setSearchFilms (filmName: string) {
    this.filmName = filmName;
    console.log('this.filmName SET in Service = ', this.filmName);   
  }
  getInitSearchFilms (filmName: string) {
    return this.http.get(this.searchUrl+this.apiKey+"&query="+filmName+this.language+"&page=1").map(this.extractListData);
  }
  getSearchFilms (filmName: string) {
    filmName = this.filmName;
    // console.log('this.filmName GET in Service', this.filmName);
    return this.http.get(this.searchUrl+this.apiKey+"&query="+this.filmName+this.language+"&page=1").map(this.extractListData);
  }
  getPopularFilms () {
    return this.http.get(this.movieUrl+"popular"+this.apiKey+this.language+"&page=1").map(this.extractListData);
  }
  getTopRatedFilms() {
    return this.http.get(this.movieUrl+"top_rated"+this.apiKey+this.language+"&page=1").map(this.extractListData);
  }
  getNowPlayingFilms() {
    return this.http.get(this.movieUrl+"now_playing"+this.apiKey+this.language+"&page=1").map(this.extractListData);
  }
  getUpcomingFilms() {
    return this.http.get(this.movieUrl+"upcoming"+this.apiKey+this.language+"&page=1").map(this.extractListData);
  }

  getNextSearchFilms (filmName: string, index: number, newIndex: number) {
    this.pageIndex++;
    return this.http.get(this.searchUrl+this.apiKey+"&query="+filmName+this.language+"&page="+index).map(this.extractListData);
  }
  getNextPopularFilms (index: number, newIndex: number) {
    this.pageIndex++;
    return this.http.get(this.movieUrl+'popular'+this.apiKey+this.language+"&page="+index).map(this.extractListData);
  }
  getNextTopRatedFilms (index: number, newIndex: number) {
    this.pageIndex++;
    return this.http.get(this.movieUrl+'top_rated'+this.apiKey+this.language+"&page="+index).map(this.extractListData);
  }
  getNextNowPlayingFilms (index: number, newIndex: number) {
    this.pageIndex++;
    return this.http.get(this.movieUrl+'now_playing'+this.apiKey+this.language+"&page="+index).map(this.extractListData);
  }
  getNextUpcomingFilms (index: number, newIndex: number) {
    this.pageIndex++;
    return this.http.get(this.movieUrl+'upcoming'+this.apiKey+this.language+"&page="+index).map(this.extractListData);
  }
  getNextFavoritesFilms (index: number, newIndex: number) {
    this.pageIndex++;
    return this.http.get(this.movieUrl+'upcoming'+this.apiKey+this.language+"&page="+index).map(this.extractListData);
  }
}
