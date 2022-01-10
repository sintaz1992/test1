import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { t } from '../types';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  @Input() todos?: string[];
  @Output() doneEvent = new EventEmitter<string>();

  itemType = t.todo;

  constructor() {}

  ngOnInit(): void {}

  todoDone(event: [string, t]) {
    this.doneEvent.emit(event[0]);
  }
}
