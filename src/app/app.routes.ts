import { Routes } from '@angular/router';
import { Informacion } from './informacion/informacion';
import { Experiencia } from './experiencia/experiencia';
// import { Proyectos } from './proyectos/proyectos';
// import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Informacion },
  { path: 'experiencia', component: Experiencia },
  { path: 'proyectos', component: Experiencia }, 
  { path: 'contacto', component: Experiencia }
];