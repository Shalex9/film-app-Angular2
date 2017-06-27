import { Component, OnInit, Input } from '@angular/core';
import {FilmService} from '../../film.service'

@Component({
  selector: 'film-card-x',
  templateUrl: './film-card-x.component.html',
  styleUrls: ['./film-card-x.component.css']
})
export class FilmCardXComponent implements OnInit {
  @Input()
  filmId: string; 
  filmItem: {} = {};
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    if(!this.filmId) {return;}
    this.filmCardService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
    })
  }
}
