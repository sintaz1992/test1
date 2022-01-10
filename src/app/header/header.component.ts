import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  listName!: string;
  @Output() newNameEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  setListName(name: string) {
    this.newNameEvent.emit(name);
  }
}
