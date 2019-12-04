import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.css' ]
})
export class ItemComponent  {
  @Input() item: Object;

  constructor(){
    this.item = {
      name: "Default",
      age: 18
    }
  }
}
