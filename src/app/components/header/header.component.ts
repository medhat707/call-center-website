import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private scrollService :ScrollService){}

  ngOnInit() {
    this.headerSize();
    }

  headerSize(){
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      const windowHeight = window.innerHeight;
      headerElement.setAttribute('style', `height: ${windowHeight}px`);
    }

  }


  scrollToFeatures(): void {
    this.scrollService.scrollToSection('ScrollTofeatures');
  }





}
