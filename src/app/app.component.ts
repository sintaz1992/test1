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
  list: List;

  constructor(private backend: BackendService) {
    const randomName = Randomizer.generateRandomListName();
    this.list = { name: randomName, todos: [], dones: [] };
    this.backend.updateList(this.list).subscribe((data) => {
    });
  }

  // set the previuosly-generated name and fetch the data from server
  setName(name: string) {
    this.list.name = name;
    this.backend.getList(this.list.name).then(data=>
        this.list = data 
    ).catch(e=>console.log(e));
  }

    // adds a new todo to the todos list
  newTodo(todo: string) {
    this.list.todos?.push(todo);
    this.backend.updateList(this.list).subscribe((data) => {
    });
  }
 // moves a task from todos ro done
  todoDone(todo: string) {
      this.list.todos = this.list.todos?.filter((task) => task !== todo);
      this.list.dones?.push(todo);
    this.backend.updateList(this.list).subscribe((data) => {
    });
   
  }
// moves a task from dones to todos
  done_Todos(done: string) {
    this.list.dones = this.list.dones?.filter((task) => task !== done);
    this.list.todos?.unshift(done);
   this.backend.updateList(this.list).subscribe((data) => {
  });
  }

  // delete a task from server
  deleteTodo(item: number) {
    this.list.dones?.splice(item,1)
    this.backend.updateList(this.list).subscribe((data) => {
    });
  }
}
