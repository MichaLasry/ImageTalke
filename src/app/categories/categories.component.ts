import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
