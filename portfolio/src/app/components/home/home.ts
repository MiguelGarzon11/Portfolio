import { Component, OnInit } from '@angular/core';
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Skills],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}

