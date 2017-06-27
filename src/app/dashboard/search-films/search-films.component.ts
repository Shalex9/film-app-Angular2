import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FilmService } from '../../film.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'search',
  templateUrl: './search-films.component.html',
  styleUrls: ['./search-films.component.css']
})
export class SearchFilmsComponent implements OnInit {
  filmNames: Array<string>
  @Output() emitSearch: EventEmitter<string>;
  @Input() filmName: string = "matrix";

  constructor(private filmService: FilmService) { this.emitSearch = new EventEmitter<string>() }

  ngOnInit() { }

  inputFilms() { this.emitSearch.emit(this.filmName); }
  
  reset() { this.filmName = "" }
}
