import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addTodo(todo: string) {
    this.newTodoEvent.emit(todo);
  }
}
