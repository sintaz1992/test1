import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import { t } from '../types';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodolistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct event when todo is done', () => {
    const emitterSpy = spyOn(component.doneEvent, 'emit');
    component.todoDone(['item', t.todo]);

    fixture.detectChanges();

    expect(emitterSpy).toHaveBeenCalledOnceWith('item');
  });
});
