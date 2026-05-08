export interface IncidentUpdate {
  date: string;
  message: string;
  status: IncidentStatus;
}

export type IncidentType = 'seguridad' | 'convivencia' | 'infraestructura' | 'servicios';
export type IncidentStatus = 'reportado' | 'en-proceso' | 'resuelto';
export type IncidentPriority = 'baja' | 'media' | 'alta' | 'urgente';

export const incidentTypeLabels: Record<IncidentType, string> = {
  seguridad: 'Seguridad',
  convivencia: 'Convivencia',
  infraestructura: 'Infraestructura',
  servicios: 'Servicios',
};

export const incidentStatusLabels: Record<IncidentStatus, string> = {
  reportado: 'Reportado',
  'en-proceso': 'En proceso',
  resuelto: 'Resuelto',
};

export interface Incident {
  id: string;
  type: IncidentType;
  title: string;
  description: string;
  location: string;
  lat: number;
  lng: number;
  status: IncidentStatus;
  date: string;
  priority: IncidentPriority;
  reportedBy?: string;
  updates?: IncidentUpdate[];
}
