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

}