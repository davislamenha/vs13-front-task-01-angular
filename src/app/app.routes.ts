import { Routes } from '@angular/router';
import { RotaUmComponent } from './rota-um/rota-um.component';
import { RotaDoisComponent } from './rota-dois/rota-dois.component';
import { RotaTresComponent } from './rota-tres/rota-tres.component';

export const routes: Routes = [
  { path: 'rota-um', component: RotaUmComponent },
  { path: 'rota-dois', component: RotaDoisComponent },
  { path: 'rota-tres', component: RotaTresComponent },
];
