import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-card');
  
  themes = ['', 'theme-gameboy', 'theme-hacker'];
  currentThemeIndex = signal(0);

  toggleTheme() {
    this.currentThemeIndex.update(i => (i + 1) % this.themes.length);
    const newTheme = this.themes[this.currentThemeIndex()];
    document.body.className = newTheme;
  }
}