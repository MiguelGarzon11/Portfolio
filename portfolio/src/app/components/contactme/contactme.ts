import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  imports: [],
  templateUrl: './contactme.html',
  styleUrl: './contactme.css'
})
export class Contactme {
  selectedPlatform: 'email' | "whatsapp" = 'email';
  message: string = '';

  setPlatform(platform: 'email' | 'whatsapp') {
    this.selectedPlatform = platform;
  }

  sendMessage() {
    if (!this.message.trim()) return;

    if (this.selectedPlatform === 'email') {
      const mailto = `mailto:miguelangelgarb@gmail.com?subject=contacto&body=${encodeURIComponent(this.message)}`
      window.open(mailto, '_blank');
    }
    else {
      const phone = '573194428331';
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(this.message)}`;
      window.open(waUrl, '_blank');
    }
  }
}