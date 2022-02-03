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
  @Output() deleteEvent = new EventEmitter<number>();

  itemType = t.done;
  constructor() {}

  ngOnInit(): void {}

  todoDone(event: [string, t]) {
    this.doneEvent.emit(event[0]);
  }

  delete(event: number) {
    this.deleteEvent.emit(event);

  }
}
