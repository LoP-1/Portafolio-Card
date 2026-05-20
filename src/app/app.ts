import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

interface Slime {
  id: number;
  speed: number;       
  deathDelay: number;  
  state: 'walking' | 'dead';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-card');

  protected readonly activeSlimes = signal<Slime[]>([
    { id: 1, speed: 20, deathDelay: 300, state: 'walking' }
  ]);

  protected spawnSlime(): void {
    const nuevoSlime: Slime = {
      id: Date.now(),
      speed: Math.floor(Math.random() * (28 - 12 + 1)) + 12,
      deathDelay: 300, 
      state: 'walking'
    };

    this.activeSlimes.update(slimes => [...slimes, nuevoSlime]);
  }

  protected squishSlime(slimeId: number): void {
    const slimesActuales = this.activeSlimes();
    const slime = slimesActuales.find(s => s.id === slimeId);

    if (slime && slime.state === 'walking') {
      this.activeSlimes.update(slimes => 
        slimes.map(s => s.id === slimeId ? { ...s, state: 'dead' } : s)
      );

      setTimeout(() => {
        this.activeSlimes.update(slimes => 
          slimes.filter(s => s.id !== slimeId)
        );
      }, slime.deathDelay);
    }
  }
}