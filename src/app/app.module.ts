import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DonelistComponent } from './donelist/donelist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    TodolistComponent,
    DonelistComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
