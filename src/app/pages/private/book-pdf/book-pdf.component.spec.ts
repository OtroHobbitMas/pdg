import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPDFComponent } from './book-pdf.component';

describe('BookPDFComponent', () => {
  let component: BookPDFComponent;
  let fixture: ComponentFixture<BookPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
