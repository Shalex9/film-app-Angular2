import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FilmService } from '../../film.service'

@Component({
  selector: 'film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  filmId: string
  filmItem: any = {}
  URLjson: string
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmCardService.returnFilmId(this.filmId).subscribe(data => {
        this.filmItem = data;
        this.URLjson = "https://api.themoviedb.org/3/movie/" + this.filmItem.id + "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade&language=ru-RU"
        console.log('URL к json-файлу с исходными данними о фильме: ', this.URLjson);
        // console.log('production_countries: ', this.production_countries);
    })
  }
    //MongoDB 
  clickFavoriteItem(){
    this.filmCardService.saveFavoriteItem(this.filmItem).subscribe(data => {
        console.log("Saved This Film to Favorites = ", data);
    })
  }
}
