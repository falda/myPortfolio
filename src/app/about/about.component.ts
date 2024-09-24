import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/myCV.pdf'; 
    link.download = 'myCV.pdf'; 
    link.click();
  }
}
