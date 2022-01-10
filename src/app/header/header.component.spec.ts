import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell app component the list name', () => {
    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector('button');
    const input = element.querySelector('input');

    const emitSpy = spyOn(component.newNameEvent, 'emit');
    input!.value = 'ABCD';
    fixture.detectChanges();
    button!.click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalledOnceWith('ABCD');
  });
});
