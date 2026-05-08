import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IncidentService } from '../services/incident.service';
import { IncidentType, IncidentPriority } from '../models/incident';

@Component({
  selector: 'app-reportar',
  imports: [FormsModule],
  templateUrl: './reportar.html',
  styleUrl: './reportar.css'
})
export class ReportarComponent {
  form = {
    type: 'seguridad' as IncidentType,
    title: '',
    description: '',
    location: '',
    priority: 'media' as IncidentPriority,
    reportedBy: '',
  };

  categories = [
    { value: 'seguridad' as IncidentType, label: 'Seguridad', color: 'cat-seguridad', icon: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' },
    { value: 'convivencia' as IncidentType, label: 'Convivencia', color: 'cat-convivencia', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' },
    { value: 'infraestructura' as IncidentType, label: 'Infraestructura', color: 'cat-infraestructura', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
    { value: 'servicios' as IncidentType, label: 'Servicios', color: 'cat-servicios', icon: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97' },
  ];

  priorities = [
    { value: 'baja' as IncidentPriority, label: 'Baja' },
    { value: 'media' as IncidentPriority, label: 'Media' },
    { value: 'alta' as IncidentPriority, label: 'Alta' },
    { value: 'urgente' as IncidentPriority, label: 'Urgente' },
  ];

  constructor(
    private service: IncidentService,
    private router: Router
  ) {}

  setCategory(type: IncidentType) {
    this.form.type = type;
  }

  setPriority(p: IncidentPriority) {
    this.form.priority = p;
  }

  onSubmit() {
    const lat = 5.535 + (Math.random() - 0.5) * 0.02;
    const lng = -73.367 + (Math.random() - 0.5) * 0.02;
    this.service.add({
      type: this.form.type,
      title: this.form.title,
      description: this.form.description,
      location: this.form.location,
      priority: this.form.priority,
      lat,
      lng,
      reportedBy: this.form.reportedBy || undefined,
    });
    this.router.navigate(['/dashboard']);
  }

  priorityClass(p: IncidentPriority): string {
    const map: Record<IncidentPriority, string> = {
      baja: 'pr-baja', media: 'pr-media', alta: 'pr-alta', urgente: 'pr-urgente'
    };
    return map[p];
  }
}
