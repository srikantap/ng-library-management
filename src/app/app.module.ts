import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HyperLink } from './srikanta.component';
import { MyButton } from './my-button.component';
import { BooksComponent } from './books/books.component';
import { FindComponent } from './books/find/find.component';
import { ListComponent } from './books/list/list.component';
import { AddComponent } from './books/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HyperLink,
    MyButton,
    BooksComponent,
    FindComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
