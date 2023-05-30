import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  @ViewChild('countingDiv', { static: true }) countingDiv!: ElementRef;
  counter: number = 0;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.startCounting();
  }

  startCounting(): void {
    this.counter = 1; // Start the counter from 1

    const intervalId = setInterval(() => {
      this.counter++;

      if (this.counter > 126) {
        clearInterval(intervalId); // Stop the counting at 10
      }
    }, 10); // Increase the counter every second (adjust as needed)
  }
}
