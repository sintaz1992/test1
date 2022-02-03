import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';

describe('AppComponent', () => {
  let saveSpy: any;
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BackendService', [
      'save',
      'getRemoteList',
    ]);
    saveSpy = spy.save.and.returnValue(of({}));
    spy.getRemoteList.and.returnValue(
      of({ name: 'MyList', todos: ['todo1'], dones: ['todo2'] })
    );
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: BackendService, useValue: spy }],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Remote todo list');
  });

  it('should get initial list from server', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.list).toEqual({
      name: 'MyList',
      todos: ['todo1'],
      dones: ['todo2'],
    });
  });

  it('should save to server', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.list = {
      name: 'OtherList',
      todos: ['todo3'],
      dones: ['todo4'],
    };
    app.newTodo('todo5');

    expect(saveSpy).toHaveBeenCalledOnceWith({
      name: 'OtherList',
      todos: ['todo3', 'todo5'],
      dones: ['todo4'],
    });
  });

  //it should delete the task from the this.list.done (If you press delete, the code should check if its removed from the this.list.done)
  //it should check when reading data from api the type is not undefined
});
