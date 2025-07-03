import { Routes } from '@angular/router';
import { BoasVindasComponent } from './pages/boas-vindas/boas-vindas.component';

export const routes: Routes = [
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: '', redirectTo: '/boas-vindas', pathMatch: 'full' },
  { path: '**', redirectTo: '/boas-vindas' } // Wildcard route para páginas não encontradas
];
