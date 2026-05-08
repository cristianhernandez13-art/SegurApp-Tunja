import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { LayoutComponent } from './layout/layout';
import { DashboardComponent } from './dashboard/dashboard';
import { MapaComponent } from './mapa/mapa';
import { ReportarComponent } from './reportar/reportar';
import { IncidentesComponent } from './incidentes/incidentes';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'reportar', component: ReportarComponent },
      { path: 'incidentes', component: IncidentesComponent },
      { path: 'incidentes/:id', component: IncidentesComponent },
    ]
  },
];
