/* eslint-disable prettier/prettier */
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';
  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  isScrolled: boolean = false;

  scrollToTop(): void {
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  onScroll(): void {
    this.isScrolled = true;
  }

}

