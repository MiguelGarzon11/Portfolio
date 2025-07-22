import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {

  ngAfterViewInit() {
    const switchInput = document.querySelector<HTMLInputElement>('[data-hs-theme-switch]');

    if (switchInput) {
      switchInput.checked = document.documentElement.classList.contains('dark');

      switchInput.addEventListener('change', () => {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');

        if (isDark) {
          html.classList.remove('dark');
          localStorage.setItem('hs_theme', 'light');
        } else {
          html.classList.add('dark');
          localStorage.setItem('hs_theme', 'dark');
        }
      });
    }
  }
}
