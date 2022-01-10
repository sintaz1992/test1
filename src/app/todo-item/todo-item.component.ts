import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { t } from '../types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() items!: string;
  @Input() todoType!: t;
  @Output() doneEvent = new EventEmitter<[string, t]>();
  dSymbol!: string;
  constructor() {}

  ngOnInit(): void {
    this.dSymbol = this.todoType === t.todo ? '✅ ' : '♻️';
  }

  todoDone(): void {
    this.doneEvent.emit([this.items, this.todoType]);
  }
}
