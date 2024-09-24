import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = "";
  message: string = "";
  email: string = "";

  sendMail(): void {
    const subject = encodeURIComponent(`Message from ${this.name}`);
    const body = encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\nMessage:\n${this.message}`
    );

    window.location.href = `mailto:loifalda@gmail.com?subject=${subject}&body=${body}`;
  }
}
