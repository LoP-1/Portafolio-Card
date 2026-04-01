# 🎮 Retro Portafolio Card

¡Bienvenido a mi portafolio! Desarrollado con mucho cariño para reflejar mi pasión por el desarrollo de software y la estética nostálgica retro/pixel-art. 

Este proyecto es una carta de presentación interactiva, completamente responsiva y equipada con un sistema de temas dinámicos.

## ✨ Características Destacadas

- **Estética Retro:** Diseño cuidadosamente trabajado con `Tailwind CSS`, utilizando sombras sólidas, bordes marcados, efectos "dither" y tipografía pixelada.
- **Sistema multi-tema:** ¡Explora diferentes paletas de colores! Incluye un botón flotante (🎨) que permite rotar instantáneamente entre 3 increíbles temas:
  - 🌌 *Midnight Retro* (Por defecto)
  - 🟩 [*Rust Gold 8 Palette*](https://lospec.com/palette-list/rust-gold-8)
  - 💻 [*Tema azul*]
- **Totalmente Responsivo:** Interfaz adaptativa. Las pestañas laterales de escritorio se transforman elegantemente en un menú inferior/superior optimizado para controles táctiles en dispositivos móviles.
- **Single Page Application:** Navegación fluida y descargas estáticas nativas impulsadas por la potencia de **Angular**.

## 🚀 Tecnologías Utilizadas

- **[Angular 17+](https://angular.dev/):** Framework principal (`standalone components` y enrutamiento inteligente).
- **[Tailwind CSS](https://tailwindcss.com/):** Utilidades de diseño e inyección de temas a través de variables CSS nativas.
- **[TypeScript](https://www.typescriptlang.org/):** Lógica del sistema web.
- **[GitHub Pages](https://pages.github.com/):** Despliegue estático y alojamiento gratuito.

## 🛠️ Instalación Local

Si quieres clonar este repositorio para probarlo o usarlo de inspiración:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/LoP-1/Portafolio-Card.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
4. Abre `http://localhost:4200/` en tu moderno navegador. ¡El sistema recargará automáticamente tus cambios!

## 📦 Producción y Despliegue

Para compilar el proyecto y subirlo a GitHub Pages u otro servicio estático:

```bash
# Recuerda cambiar el base-href por el nombre exacto de tu repositorio si usas GH Pages
ng build --base-href /Portafolio-Card/
```

Los artefactos optimizados se generarán dentro de la carpeta `dist/`.

