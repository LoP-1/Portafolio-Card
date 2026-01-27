import { Routes } from '@angular/router';
import { Informacion} from './informacion/informacion';
import { ignoreElements } from 'rxjs';

export const routes: Routes = [
  { path: '', component: Informacion
  /* { path: 'proyectos', component: ProyectosComponent },
  { path: 'habilidades', component: SkillsComponent } 
  */}
];