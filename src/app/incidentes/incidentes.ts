import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IncidentService } from '../services/incident.service';
import { Incident, IncidentType, IncidentStatus, incidentTypeLabels } from '../models/incident';

@Component({
  selector: 'app-incidentes',
  imports: [CommonModule],
  templateUrl: './incidentes.html',
  styleUrl: './incidentes.css'
})
export class IncidentesComponent {
  incidents: Incident[] = [];
  filtroEstado: string = 'all';
  selectedId: string | null = null;
  incidentTypeLabels = incidentTypeLabels;

  constructor(
    private service: IncidentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.incidents = this.service.getAll();
    this.selectedId = this.route.snapshot.params['id'] || null;
  }

  get filtered(): Incident[] {
    if (this.filtroEstado === 'all') return this.incidents;
    return this.incidents.filter(i => i.status === this.filtroEstado);
  }

  get selected(): Incident | undefined {
    return this.selectedId ? this.service.getById(this.selectedId) : undefined;
  }

  typeIcon(type: IncidentType): string {
    const icons: Record<IncidentType, string> = {
      seguridad: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
      convivencia: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
      infraestructura: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
      servicios: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97',
    };
    return icons[type];
  }

  typeColor(type: IncidentType): string {
    return 'type-' + type;
  }

  statusColor(status: IncidentStatus): string {
    return 'st-' + status;
  }

  goBack() {
    this.selectedId = null;
    this.router.navigate(['/incidentes']);
  }

  selectIncident(inc: Incident) {
    this.selectedId = inc.id;
    this.router.navigate(['/incidentes', inc.id]);
  }

  setFiltro(f: string) {
    this.filtroEstado = f;
  }

  countByStatus(s: string): number {
    if (s === 'all') return this.incidents.length;
    return this.incidents.filter(i => i.status === s).length;
  }
}
