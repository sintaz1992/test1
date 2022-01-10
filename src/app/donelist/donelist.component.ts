import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { t } from '../types';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.scss'],
})
export class DonelistComponent implements OnInit {
  @Input() todos?: string[];
  @Output() doneEvent = new EventEmitter<string>();

  itemType = t.todo;
  constructor() {}

  ngOnInit(): void {}

  todoDone(event: [string, t]) {
    this.doneEvent.emit(event[0]);
  }

  delete(item: number) {
    this.todos = Array(
      ...(this.todos?.slice(0, item) ?? []),
      ...(this.todos?.slice(item + 1) ?? [])
    );
  }
}
