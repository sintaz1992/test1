import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonelistComponent } from './donelist.component';
import { t } from '../types';

describe('DonelistComponent', () => {
  let component: DonelistComponent;
  let fixture: ComponentFixture<DonelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonelistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct event when done is recycled', () => {
    const emitterSpy = spyOn(component.doneEvent, 'emit');
    component.todoDone(['item', t.done]);

    fixture.detectChanges();

    expect(emitterSpy).toHaveBeenCalledOnceWith('item');
  });

  it('should delete from done list when delete is called', () => {
    component.todos = ['a', 'b', 'c'];

    fixture.detectChanges();
    component.delete(2);
    expect(component.todos).toEqual(['a', 'b']);
  });
});
