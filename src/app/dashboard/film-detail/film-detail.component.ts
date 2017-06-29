import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FilmService } from '../../film.service';

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
  dbId: any
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmCardService.returnFilmId(this.filmId).subscribe(data => {
        this.filmItem = data;
        console.log("filmItem in film-detail", this.filmItem)
        // this.dbId = this.filmItem.
        this.URLjson = "https://api.themoviedb.org/3/movie/" + this.filmItem.id + "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade&language=ru-RU"
        console.log('URL к json-файлу с исходными данними о фильме: ', this.URLjson);
        // console.log('production_countries: ', this.production_countries);
    })
    // $(".set-favorite-false").click(this.clickFavoriteItem());
    // $(".set-favorite-false.true").click(this.deleteFavoriteItem());
  }
    //MongoDB 
  clickFavoriteItem(){
    // this.filmCardService.saveFavoriteItem(this.filmItem).subscribe(data => {
    //     console.log("Saved This Film to Favorites = ", data);
    // })
    $(".set-favorite-false").toggleClass("true");
    $(".set-favorite-false").hasClass("true") ? $(".set-favorite-false.true").children("i").html("turned_in") : $(".set-favorite-false").children("i").html("turned_in_not");
    // if($(".set-favorite-false")){
    //   $(".set-favorite-false").click(this.clickFavoriteItem())
    // }
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
