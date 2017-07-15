import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FilmService } from '../../film.service'
@Component({
  selector: 'actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {
  @Input() actor: any

  ngOnInit() { }
  clickFilm(){ }
}
