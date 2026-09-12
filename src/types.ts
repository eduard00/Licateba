export type UserRole = 'superadmin' | 'admin' | 'editor' | 'docente' | 'estudiante' | 'visitante';

export type EditorialStatus = 
  | 'borrador' 
  | 'pendiente' 
  | 'en_revision' 
  | 'requiere_correccion' 
  | 'aprobado' 
  | 'publicado' 
  | 'archivado';

export type PriorityLevel = 'urgente' | 'alta' | 'normal';

export type ActivityStatus = 'proxima' | 'realizada' | 'cancelada';

export type AudienceTarget = 'todos' | 'estudiantes' | 'docentes' | 'padres';

export interface User {
  id: string;
  nombre: string;
  email: string;
  rol: UserRole;
  departamentoOCurso: string;
  fotoUrl: string;
  activo: boolean;
}

export interface Aviso {
  id: string;
  titulo: string;
  contenido: string;
  categoria: 'comunicado' | 'suspension' | 'reunion' | 'recordatorio' | 'academico' | 'urgente';
  prioridad: PriorityLevel;
  destinatario: AudienceTarget;
  fechaPublicacion: string;
  fechaExpiracion: string;
  autor: string;
  autorCargo: string;
  archivoAdjunto?: {
    nombre: string;
    url: string;
    tamano: string;
  };
  estado: 'publicado' | 'borrador' | 'archivado';
}

export interface Actividad {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: 
    | 'acto_escolar'
    | 'feria_tecnologica'
    | 'charla'
    | 'excursion'
    | 'cultural'
    | 'deportiva'
    | 'academica'
    | 'tecnologica'
    | 'religiosa_pastoral'
    | 'concurso';
  fecha: string;
  hora: string;
  lugar: string;
  responsable: string;
  estado: ActivityStatus;
  imagenPrincipal: string;
  galeria?: string[];
  documentos?: { nombre: string; url: string }[];
  asistenciaEsperada?: number;
}

export interface ArticuloPeriodico {
  id: string;
  edicionId: string;
  titulo: string;
  subtitulo: string;
  autor: string;
  autorRol: 'Estudiante' | 'Docente' | 'Equipo Editorial' | 'Egresado';
  cursoOSeccion?: string;
  fecha: string;
  categoria: 
    | 'noticias_escolares'
    | 'tecnologia'
    | 'ciencia'
    | 'cultura'
    | 'deportes'
    | 'arte'
    | 'literatura'
    | 'entrevistas'
    | 'opinion'
    | 'vida_estudiantil'
    | 'proyectos'
    | 'pastoral_valores'
    | 'medio_ambiente';
  imagenDestacada: string;
  galeriaImagenes?: string[];
  contenido: string;
  destacadoEnPortada?: boolean;
  visitas: number;
  tags: string[];
  estado: EditorialStatus;
}

export interface EdicionPeriodico {
  id: string;
  numero: string;
  titulo: string;
  fechaPublicacion: string;
  temaCentral: string;
  portadaUrl: string;
  editorial: string;
  editorJefe: string;
  activa: boolean;
}

export interface PropuestaArticulo {
  id: string;
  nombreEstudiante: string;
  emailEstudiante: string;
  cursoSeccion: string;
  tema: string;
  categoria: string;
  tituloPropuesto: string;
  contenido: string;
  fotografiaUrl?: string;
  documentoUrl?: string;
  autorizacionPublicacion: boolean;
  fechaEnvio: string;
  estado: EditorialStatus;
  retroalimentacionDocente?: string;
  revisorAsignado?: string;
  fechaRevision?: string;
}

export interface SheetColumnDef {
  nombre: string;
  tipo: 'string' | 'number' | 'date' | 'boolean' | 'enum' | 'url';
  descripcion: string;
  ejemplo: string | number;
}

export interface SheetTableDef {
  nombre: string;
  descripcion: string;
  icono: string;
  columnas: SheetColumnDef[];
  registrosEjemplo: Record<string, string | number | boolean>[];
}

export interface AuditLog {
  id: string;
  fechaHora: string;
  usuario: string;
  rol: UserRole;
  modulo: string;
  accion: string;
  detalles: string;
}

export interface GaleriaFoto {
  id: string;
  url: string;
  titulo: string;
  categoria: 'feria_tecnologica' | 'academica' | 'pastoral' | 'deportiva' | 'institucional';
  fecha: string;
  descripcion?: string;
}

export type ActiveView = 
  | 'inicio'
  | 'nosotros'
  | 'actividades'
  | 'avisos'
  | 'periodico'
  | 'proponer'
  | 'galeria'
  | 'contacto'
  | 'admin'
  | 'arquitectura';
