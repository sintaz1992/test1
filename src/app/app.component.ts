import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Randomizer } from './randomizer';
import { List } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Remote todo list';
  listName: string;
  list: List;

  constructor(private backend: BackendService) {
    this.listName = Randomizer.generateRandomListName();
    backend.name = this.listName;
    this.list = { name: this.listName, todos: [], dones: [] };
    backend.getRemoteList(this.listName).subscribe((data: List) => {
      if (data) {
        this.list = data;
      }
    });
  }

  newName(name: string) {
    this.listName = name;
    this.backend.getRemoteList(this.listName).subscribe((data: List) => {
      if (data) {
        this.list = data;
      }
    });
  }

  newTodo(todo: string) {
    this.list.todos?.push(todo);
    this.backend.save(this.list).subscribe((data) => {
      console.log('Backed up data!', data);
    });
  }

  todoDone(done: string) {
    const idx = this.list.todos?.findIndex((dString) => dString === done);
    this.list.todos = this.list.todos
      ?.slice(0, idx)
      .concat(this.list.todos?.slice((idx as number) + 1));
    this.list.dones?.push(done);
    this.backend.save(this.list);
    //console.log('Backed up data!');
  }

  doneDone(done: string) {
    const idx = this.list.dones?.findIndex((dString) => dString === done);
    this.list.dones = this.list.dones
      ?.slice(0, idx)
      .concat(this.list.dones?.slice((idx as number) + 1));
    if (this.list.todos) {
      this.list.todos[1] = done;
    }
    this.backend.save(this.list);
    console.log('Backed up data!');
  }
}
