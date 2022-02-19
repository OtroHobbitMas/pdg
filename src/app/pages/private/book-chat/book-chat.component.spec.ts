import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChatComponent } from './book-chat.component';

describe('BookChatComponent', () => {
  let component: BookChatComponent;
  let fixture: ComponentFixture<BookChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
