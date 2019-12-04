import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: Object[];
  name = 'Angular';

  constructor() {
    this.items = [
      { name: "abc", age: 12, float: 'left' },
      { name: "abd", age: 13, float: 'right' },
      { name: "abe", age: 14, float: 'left' },
      { name: "abf", age: 15, float: 'right' },
      { name: "abg", age: 16, float: 'left' },
      { name: "abh", age: 17, float: 'right' },
      { name: "abi", age: 18, float: 'left' }
    ]
    setTimeout(()=>{
      this.items.push({ name: "kuku", age: 68, float: 'left' })
    },5000);
  }
}
