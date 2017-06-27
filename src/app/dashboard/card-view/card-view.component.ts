import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  sizeVariants = [
    {value: 'yCards', viewValue: 'Y-Cards'},
    {value: 'xCards', viewValue: 'X-Cards'},
    {value: 'sketchCards', viewValue: 'Sketch-Cards'}
  ];
  selectedView: string = this.sizeVariants[0].value;

  @Output() emitCardView: EventEmitter<string>;

  constructor() { this.emitCardView = new EventEmitter<string>() }

  changeCardView() { this.emitCardView.emit(this.selectedView); }  
}
