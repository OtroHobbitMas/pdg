import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-book-pdf',
  templateUrl: './book-pdf.component.html',
  styleUrls: ['./book-pdf.component.scss']
})
export class BookPDFComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  showFiller = false;
  
  public name: string = "Harry Potter y la Piedra Filosofal"; 

  // pdfSrc = "https://drive.google.com/file/d/1jq3wKpEloUZlT3PjqSn0GGhfuytXJbhD/view?usp=sharing";
  pdfSrc="../../../../assets/HarryPotter-PiedraFilosofal.pdf";

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  pageInitialized(e: CustomEvent) {
    console.log('(pages-initialized:)', e);
  }

  onProgress(progressData) {
    console.log('(progress)', progressData); // do anything with progress data. For example progress indicator
  }
}

