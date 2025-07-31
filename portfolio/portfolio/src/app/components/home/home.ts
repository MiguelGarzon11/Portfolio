import { Component, OnInit } from '@angular/core';
import { Skills } from "../skills/skills";
import { Me } from '../me/me';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Skills, Me],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}

