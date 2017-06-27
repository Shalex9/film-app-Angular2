import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FilmService } from '../../film.service'

@Component({
  selector: 'film-card-y',
  templateUrl: './film-card-y.component.html',
  styleUrls: ['./film-card-y.component.css']
})
export class FilmCardYComponent implements OnInit {
  @Input() filmId: string
  filmItem: any = {}
  currentFilmId: string
  routeDetailPage: string = 'film-detail'
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    if(!this.filmId) {return;}
    // console.log('OLL ID: ', this.filmId);
    this.filmCardService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
      // console.log('filmItem: ', this.filmItem);
    })
  }
  clickFilm(){
    this.currentFilmId = this.filmId;
    // console.log("CURRENT ID: ", this.currentFilmId)
    this.filmCardService.setFilmId(this.currentFilmId)
  }
}


