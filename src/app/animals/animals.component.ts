import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  @Output() imgClick: EventEmitter<string> = new EventEmitter();
  @Input() _imgs: any[]
  constructor() { }


  get imgs() {
    // console.log(this._imgs)
    return this._imgs
  }
  ngOnInit() {
  }

}
