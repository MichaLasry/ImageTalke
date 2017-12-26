import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  @Input() imgs: string[]
  constructor() { }

  ngOnInit() {
  }

}
