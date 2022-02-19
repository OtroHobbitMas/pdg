import { Component, OnInit } from '@angular/core';


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

  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/tesisredsocial-be58f.appspot.com/o/books%2FHarryPotter-PiedraFilosofal.pdf?alt=media&token=fd8c3d54-b931-4bb9-a158-1b6d3496e2d8";

}
