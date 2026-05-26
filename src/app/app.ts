import { Component, OnInit, signal } from '@angular/core';
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
export class App implements OnInit {
  protected readonly title = signal('portafolio-card');

  // Inicializa vacío, se poblará dinámicamente al cargar la página
  protected readonly activeSlimes = signal<Slime[]>([]);

  ngOnInit(): void {
    // Genera automáticamente los 10 slimes al iniciar el componente
    for (let i = 0; i < 10; i++) {
      this.spawnSlime(i);
    }
  }

  // Agrega un parámetro de offset opcional para evitar IDs idénticos en ejecuciones ultra rápidas de bucle
  protected spawnSlime(offset = 0): void {
    const nuevoSlime: Slime = {
      id: Date.now() + offset + Math.random(),
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
      // 1. Cambia el estado a muerto para disparar las animaciones CSS correspondientes
      this.activeSlimes.update(slimes => 
        slimes.map(s => s.id === slimeId ? { ...s, state: 'dead' } : s)
      );

      // 2. Espera a que termine la animación de aplastamiento
      setTimeout(() => {
        this.activeSlimes.update(slimes => 
          slimes.filter(s => s.id !== slimeId)
        );
        
        // 3. Invoca instantáneamente un nuevo slime reemplazante manteniendo siempre 10 estables
        this.spawnSlime();
      }, slime.deathDelay);
    }
  }
}