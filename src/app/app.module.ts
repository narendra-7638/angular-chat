import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './items/items.component';

const config: SocketIoConfig = { url: 'https://hot-blogs.herokuapp.com/', options: {} };

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
