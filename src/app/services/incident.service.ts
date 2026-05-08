import { Injectable } from '@angular/core';
import { Incident } from '../models/incident';

@Injectable({ providedIn: 'root' })
export class IncidentService {
  private incidents: Incident[] = [
    {
      id: '1', type: 'seguridad', title: 'Iluminación deficiente en parque',
      description: 'El Parque Santander tiene varias luminarias apagadas, generando inseguridad en horas de la noche.',
      location: 'Parque Santander, Centro', lat: 5.5353, lng: -73.3678,
      status: 'en-proceso', date: '2026-04-10T18:30:00', priority: 'alta',
      updates: [
        { date: '2026-04-10T18:30:00', message: 'Reporte recibido', status: 'reportado' },
        { date: '2026-04-11T09:15:00', message: 'Asignado a equipo de mantenimiento', status: 'en-proceso' }
      ]
    },
    {
      id: '2', type: 'infraestructura', title: 'Hueco grande en la vía',
      description: 'Hueco profundo en la Carrera 10 con Calle 19 que representa peligro para vehículos y peatones.',
      location: 'Carrera 10 con Calle 19', lat: 5.5387, lng: -73.3602,
      status: 'reportado', date: '2026-04-12T07:15:00', priority: 'urgente'
    },
    {
      id: '3', type: 'convivencia', title: 'Ruido excesivo en horas nocturnas',
      description: 'Establecimiento comercial genera ruido excesivo después de las 11 PM afectando a los residentes.',
      location: 'Calle 20 #9-45', lat: 5.5401, lng: -73.3621,
      status: 'en-proceso', date: '2026-04-11T23:45:00', priority: 'media'
    },
    {
      id: '4', type: 'seguridad', title: 'Intento de robo en sector residencial',
      description: 'Se reportó intento de robo a vivienda en el barrio Los Muiscas. Incrementar vigilancia.',
      location: 'Barrio Los Muiscas', lat: 5.5421, lng: -73.3543,
      status: 'reportado', date: '2026-04-12T06:20:00', priority: 'urgente'
    },
    {
      id: '5', type: 'servicios', title: 'Fuga de agua en vía pública',
      description: 'Fuga de agua considerable en la Avenida Oriental causando desperdicio y daño a la vía.',
      location: 'Avenida Oriental con Calle 21', lat: 5.5445, lng: -73.3589,
      status: 'resuelto', date: '2026-04-09T14:00:00', priority: 'alta',
      updates: [
        { date: '2026-04-09T14:00:00', message: 'Reporte recibido', status: 'reportado' },
        { date: '2026-04-09T16:30:00', message: 'Equipo en sitio', status: 'en-proceso' },
        { date: '2026-04-10T11:00:00', message: 'Fuga reparada exitosamente', status: 'resuelto' }
      ]
    },
    {
      id: '6', type: 'infraestructura', title: 'Semáforo averiado',
      description: 'Semáforo peatonal no funciona en cruce peligroso cerca al colegio.',
      location: 'Calle 15 con Carrera 8', lat: 5.5369, lng: -73.3651,
      status: 'reportado', date: '2026-04-13T08:00:00', priority: 'alta'
    },
    {
      id: '7', type: 'convivencia', title: 'Riña callejera recurrente',
      description: 'Constantes enfrentamientos cerca al parque principal los fines de semana.',
      location: 'Plaza de Bolívar', lat: 5.5391, lng: -73.3634,
      status: 'reportado', date: '2026-04-13T02:30:00', priority: 'urgente'
    },
    {
      id: '8', type: 'servicios', title: 'Recolección de basuras irregular',
      description: 'El servicio de recolección no pasa hace 3 días en el sector.',
      location: 'Calle 18 #10-30', lat: 5.5378, lng: -73.3615,
      status: 'en-proceso', date: '2026-04-11T10:00:00', priority: 'media'
    },
  ];

  getAll(): Incident[] {
    return this.incidents;
  }

  getById(id: string): Incident | undefined {
    return this.incidents.find(i => i.id === id);
  }

  add(incident: Omit<Incident, 'id' | 'status' | 'date' | 'updates'>): Incident {
    const newIncident: Incident = {
      ...incident,
      id: String(Date.now()),
      status: 'reportado',
      date: new Date().toISOString(),
      updates: [{ date: new Date().toISOString(), message: 'Reporte recibido', status: 'reportado' }]
    };
    this.incidents.unshift(newIncident);
    return newIncident;
  }
}
