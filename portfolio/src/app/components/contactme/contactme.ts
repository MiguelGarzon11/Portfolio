import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactme',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactme.html',
  styleUrl: './contactme.css'
})
export class Contactme {
  selectedPlatform: 'email' | "whatsapp" = 'email';
  email: string = '';
  subject: string = '';
  message: string = '';

  setPlatform(platform: 'email' | 'whatsapp') {
    this.selectedPlatform = platform;
  }

  sendWhatsApp() {
    const text = this.message.trim();

    if (!text || !/^[a-zA-Z0-9 .,!?¿¡áéíóúÁÉÍÓÚñÑ]+$/.test(text)) {
      alert('Please enter a valid message.');
      return;
    }

    const phoneNumber = '573194428331';
    const encodeMessage = encodeURIComponent(text)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
    window.open(whatsappUrl, '__blank');
  }

  sendEmail() {

  }
}