import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FilmService } from '../../film.service';
import { ActorCardComponent } from '../actor-card/actor-card.component';

declare var $:any;

@Component({
  selector: 'film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  filmId: string
  filmItem: any = {}
  URLjson: string
  dbId: string
  filmIDList: any[] = []
  actorsList: any = {}
  actorsNameList: any = []
  actorsFotoList: any = []
  genreList: any[] = []
  bg: string = "https://image.tmdb.org/t/p/w500"

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmCardService.returnFilmId(this.filmId).subscribe(data => {
        this.filmItem = data;
        // console.log("filmId in film-detail", this.filmId);
        // console.log("filmItem in film-detail", this.filmItem);
        this.URLjson = "https://api.themoviedb.org/3/movie/" + this.filmItem.id + "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade&language=ru-RU"
        // console.log('URL к json-файлу с исходными данними о фильме: ', this.URLjson);
        // console.log('production_countries: ', this.production_countries);
        this.dbId = this.filmItem.id;
        console.log('this.dbId: ', this.dbId); //это значение нужно искать в favoritesIDList(Service) or filmIDList(favorites.component). Эсли такой ид существует давать класс true для $(".set-favorite-false")
    })
    // this.filmCardService.getFavoritesIDList(this.filmIDList).subscribe(dataList => {
    //     this.filmIDList = dataList;
    //     console.log("filmIDList", this.filmIDList);
    // })
    this.filmCardService.getActors(this.filmId).subscribe(actors => {
        this.actorsList = actors.slice(0,10);
        console.log("actorsList", this.actorsList);
        // this.actorsNameList = this.actorsList.forEach()
    })
    //     this.filmService.getCredits(this.filmID).subscribe(credits => {
    //   console.log(credits)
    //   this.cast = credits.cast.slice(0,10)
    // })
    this.getGenres();
  }

  getGenres() {
      // return this.filmDetail.genres.map(e=>e.name).join(",") || "" ;
  }
    //MongoDB 
  clickFavoriteItem(){
    $(".set-favorite-false").toggleClass("true");
    $(".set-favorite-false").hasClass("true") ? $(".set-favorite-false.true").children("i").html("turned_in") : $(".set-favorite-false").children("i").html("turned_in_not");
    $(".set-favorite-false").hasClass("true") ? $(".set-favorite-false.true").click(
        this.filmCardService.saveFavoriteItem(this.filmItem).subscribe(data => {
            console.log("Saved This Film to Favorites = ", data);
        })
    ) : $(".set-favorite-false").click(this.removeFavoriteItem());
  }
  removeFavoriteItem(){
    this.filmCardService.deleteFavoriteItem(this.filmItem).subscribe(data => {
        console.log("Deleted This Film into Favorites = ", data);
    })
    console.log ("will be delete")
  }
}
