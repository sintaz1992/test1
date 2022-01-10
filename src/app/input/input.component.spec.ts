import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when user fills in and clicks button', () => {
    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector('button');
    const input = element.querySelector('input');

    const emitSpy = spyOn(component.newTodoEvent, 'emit');
    input!.value = 'testTodo';
    fixture.detectChanges();
    button!.click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalledOnceWith('testTodo');
  });
});
