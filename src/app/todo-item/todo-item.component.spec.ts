import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { t } from '../types';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show checkmark in todo list', () => {
    component.dSymbol = '✅';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector('button');

    expect(button?.textContent).toBe('✅');
  });

  it('should show recycle in done list', () => {
    component.dSymbol = '♻️';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector('button');

    expect(button?.textContent).toBe('♻️');
  });

  it('should emit correctly', () => {
    const emitterSpy = spyOn(component.doneEvent, 'emit');

    component.todoType = t.todo;
    component.items = 'todo';
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector('button');
    button!.click();
    expect(emitterSpy).toHaveBeenCalledOnceWith(['todo', t.todo]);
  });
});
