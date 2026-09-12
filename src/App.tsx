import React, { useState } from 'react';
import { 
  ActiveView, 
  UserRole, 
  Aviso, 
  Actividad, 
  ArticuloPeriodico, 
  EdicionPeriodico, 
  PropuestaArticulo, 
  User, 
  AuditLog, 
  EditorialStatus,
  GaleriaFoto
} from './types';
import { 
  AVISOS_INITIAL, 
  ACTIVIDADES_INITIAL, 
  EDICIONES_PERIODICO, 
  ARTICULOS_PERIODICO_INITIAL, 
  PROPUESTAS_INITIAL, 
  USUARIOS_MOCK, 
  AUDITORIA_INITIAL 
} from './data/initialData';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { NosotrosView } from './components/NosotrosView';
import { AvisosView } from './components/AvisosView';
import { ActividadesView } from './components/ActividadesView';
import { PeriodicoView } from './components/PeriodicoView';
import { ProponerArticuloView } from './components/ProponerArticuloView';
import { GaleriaView } from './components/GaleriaView';
import { ContactoView } from './components/ContactoView';
import { AdminDashboard } from './components/AdminDashboard';

const DEFAULT_GALERIA: GaleriaFoto[] = [
  {
    id: 'gal-01',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80',
    titulo: 'Presentación de Proyectos IoT en LICATEBA Tech 2026',
    categoria: 'feria_tecnologica',
    fecha: 'Octubre 2026',
    descripcion: 'Estudiantes de 6to de Informática demostrando su sistema de control de humedad para plantaciones de plátano.'
  },
  {
    id: 'gal-02',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=900&auto=format&fit=crop&q=80',
    titulo: 'Prácticas de Cableado y Servidores en Taller de Redes',
    categoria: 'academica',
    fecha: 'Septiembre 2026',
    descripcion: 'Alumnos de SRSI configurando switches administrables en rack industrial.'
  },
  {
    id: 'gal-03',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80',
    titulo: 'Eucaristía de Inicio de Año Lectivo y Bendición de Talleres',
    categoria: 'pastoral',
    fecha: 'Septiembre 2026',
    descripcion: 'Celebración litúrgica presidida por el rector Pbro. Marcos Pérez en la Capilla Madre del Buen Consejo.'
  },
  {
    id: 'gal-04',
    url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=900&auto=format&fit=crop&q=80',
    titulo: 'Instalación de Paneles Solares en Taller de Electrotecnia',
    categoria: 'academica',
    fecha: 'Agosto 2026',
    descripcion: 'Estudiantes de Automatización realizando mediciones con multímetros certificados.'
  },
  {
    id: 'gal-05',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=80',
    titulo: 'Ceremonia de Graduación de Bachilleres Técnicos',
    categoria: 'institucional',
    fecha: 'Julio 2026',
    descripcion: 'Entrega de títulos acreditados por el MINERD a 145 nuevos técnicos profesionales.'
  },
  {
    id: 'gal-06',
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&auto=format&fit=crop&q=80',
    titulo: 'Torneo Intercolegial Deportivo de Baloncesto Barahona',
    categoria: 'deportiva',
    fecha: 'Junio 2026',
    descripcion: 'La selección de LICATEBA obteniendo el trofeo provincial en la cancha bajo techo.'
  },
  {
    id: 'gal-07',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80',
    titulo: 'Reunión de Redacción del Periódico Escolar Digital',
    categoria: 'academica',
    fecha: 'Septiembre 2026',
    descripcion: 'El equipo de reporteros escolares definiendo las secciones de la Edición 04.'
  },
  {
    id: 'gal-08',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
    titulo: 'Expedición Ecológica y Limpieza Costera en Bahía de Neiba',
    categoria: 'pastoral',
    fecha: 'Agosto 2026',
    descripcion: 'Jóvenes de Pastoral y Club Ambiental recolectando desechos plásticos en el litoral.'
  }
];

export default function App() {
  // Global View & Role
  const [activeView, setActiveView] = useState<ActiveView>('inicio');
  const [currentRole, setCurrentRole] = useState<UserRole>('visitante');

  // Core Data Collections
  const [avisos, setAvisos] = useState<Aviso[]>(AVISOS_INITIAL);
  const [actividades, setActividades] = useState<Actividad[]>(ACTIVIDADES_INITIAL);
  const [ediciones, setEdiciones] = useState<EdicionPeriodico[]>(EDICIONES_PERIODICO);
  const [edicionActiva, setEdicionActiva] = useState<EdicionPeriodico>(EDICIONES_PERIODICO[0]);
  const [articulos, setArticulos] = useState<ArticuloPeriodico[]>(ARTICULOS_PERIODICO_INITIAL);
  const [propuestas, setPropuestas] = useState<PropuestaArticulo[]>(PROPUESTAS_INITIAL);
  const [usuarios, setUsuarios] = useState<User[]>(USUARIOS_MOCK);
  const [auditoria, setAuditoria] = useState<AuditLog[]>(AUDITORIA_INITIAL);
  const [fotos, setFotos] = useState<GaleriaFoto[]>(DEFAULT_GALERIA);

  // Modals / Item Selection
  const [selectedAviso, setSelectedAviso] = useState<Aviso | null>(null);
  const [selectedActividad, setSelectedActividad] = useState<Actividad | null>(null);
  const [selectedArticulo, setSelectedArticulo] = useState<ArticuloPeriodico | null>(null);

  // Pending count for editorial indicator
  const pendingCount = propuestas.filter(p => p.estado === 'pendiente' || p.estado === 'en_revision').length;

  // Audit logger helper
  const addAuditLog = (modulo: string, accion: string, detalles: string) => {
    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      fechaHora: new Date().toLocaleString('es-DO'),
      usuario: `${currentRole}@licateba.edu.do`,
      rol: currentRole,
      modulo,
      accion,
      detalles
    };
    setAuditoria(prev => [newLog, ...prev]);
  };

  // 1. Handlers for Avisos
  const handleCrearAviso = (nuevoAviso: Omit<Aviso, 'id'>) => {
    const id = `av-${Date.now()}`;
    const created: Aviso = { ...nuevoAviso, id };
    setAvisos(prev => [created, ...prev]);
    addAuditLog('Avisos', 'CREAR_AVISO', `Se publicó el aviso institucional: "${nuevoAviso.titulo}"`);
  };

  const handleEliminarAviso = (id: string) => {
    const target = avisos.find(a => a.id === id);
    setAvisos(prev => prev.filter(a => a.id !== id));
    addAuditLog('Avisos', 'ELIMINAR_AVISO', `Se eliminó el aviso: "${target?.titulo || id}"`);
  };

  const handleCambiarEstadoAviso = (id: string, estado: Aviso['estado']) => {
    setAvisos(prev => prev.map(a => a.id === id ? { ...a, estado } : a));
    addAuditLog('Avisos', 'CAMBIO_ESTADO', `Aviso ${id} actualizado a estado: ${estado}`);
  };

  // 2. Handlers for Actividades
  const handleCrearActividad = (nuevaAct: Omit<Actividad, 'id'>) => {
    const id = `act-${Date.now()}`;
    const created: Actividad = { ...nuevaAct, id };
    setActividades(prev => [created, ...prev]);
    addAuditLog('Actividades', 'CREAR_ACTIVIDAD', `Se programó la actividad: "${nuevaAct.titulo}"`);
  };

  const handleEliminarActividad = (id: string) => {
    const target = actividades.find(a => a.id === id);
    setActividades(prev => prev.filter(a => a.id !== id));
    addAuditLog('Actividades', 'ELIMINAR_ACTIVIDAD', `Se eliminó la actividad: "${target?.titulo || id}"`);
  };

  // 3. Handlers for Student Proposals & Editorial Flow
  const handleEnviarPropuesta = (propuesta: Omit<PropuestaArticulo, 'id' | 'fechaEnvio' | 'estado'>) => {
    const id = `prop-${Date.now()}`;
    const created: PropuestaArticulo = {
      ...propuesta,
      id,
      fechaEnvio: new Date().toISOString().split('T')[0],
      estado: 'pendiente'
    };
    setPropuestas(prev => [created, ...prev]);
    addAuditLog('Editorial', 'NUEVA_PROPUESTA', `Estudiante ${propuesta.nombreEstudiante} envió propuesta: "${propuesta.tituloPropuesto}"`);
  };

  const handleActualizarEstadoPropuesta = (id: string, nuevoEstado: EditorialStatus, feedback?: string) => {
    const target = propuestas.find(p => p.id === id);
    if (!target) return;

    setPropuestas(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          estado: nuevoEstado,
          retroalimentacionDocente: feedback !== undefined ? feedback : p.retroalimentacionDocente,
          fechaRevision: new Date().toISOString().split('T')[0],
          revisorAsignado: `${currentRole.toUpperCase()} LICATEBA`
        };
      }
      return p;
    }));

    addAuditLog('Editorial', 'CAMBIO_ESTADO_PROPUESTA', `Propuesta "${target.tituloPropuesto}" cambió a ${nuevoEstado}`);

    // If marked as 'publicado', generate an article into the active issue of the newspaper!
    if (nuevoEstado === 'publicado') {
      const nuevoArticulo: ArticuloPeriodico = {
        id: `art-gen-${Date.now()}`,
        edicionId: edicionActiva.id,
        titulo: target.tituloPropuesto,
        subtitulo: `Redactado por ${target.nombreEstudiante} (${target.cursoSeccion}) para LICATEBA Informa.`,
        autor: target.nombreEstudiante,
        autorRol: 'Estudiante',
        cursoOSeccion: target.cursoSeccion,
        fecha: new Date().toLocaleDateString('es-DO', { day: '2-digit', month: 'long', year: 'numeric' }),
        categoria: target.categoria,
        imagenDestacada: target.fotografiaUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
        destacadoEnPortada: false,
        visitas: 1,
        tags: [target.categoria, 'Estudiantil', 'LICATEBA'],
        estado: 'publicado',
        contenido: target.contenido
      };
      setArticulos(prev => [nuevoArticulo, ...prev]);
      addAuditLog('Editorial', 'PUBLICAR_EN_PERIODICO', `Artículo publicado oficialmente en ${edicionActiva.numero}`);
    }
  };

  // Quick navigation helpers for cards in HomeView
  const handleSelectArticuloFromHome = (art: ArticuloPeriodico) => {
    setSelectedArticulo(art);
    setActiveView('periodico');
  };

  const handleSelectAvisoFromHome = (aviso: Aviso) => {
    setSelectedAviso(aviso);
    setActiveView('avisos');
  };

  const handleSelectActividadFromHome = (act: Actividad) => {
    setSelectedActividad(act);
    setActiveView('actividades');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Institutional Top Navigation */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        avisos={avisos}
        pendingCount={pendingCount}
      />

      {/* 2. Main Content Canvas according to ActiveView */}
      <main className="grow">
        {activeView === 'inicio' && (
          <HomeView
            setActiveView={setActiveView}
            avisos={avisos}
            actividades={actividades}
            articulos={articulos}
            edicionActiva={edicionActiva}
            onSelectArticulo={handleSelectArticuloFromHome}
            onSelectAviso={handleSelectAvisoFromHome}
            onSelectActividad={handleSelectActividadFromHome}
          />
        )}

        {activeView === 'nosotros' && (
          <NosotrosView />
        )}

        {activeView === 'avisos' && (
          <AvisosView
            avisos={avisos}
            currentRole={currentRole}
            onCrearAviso={handleCrearAviso}
            selectedAviso={selectedAviso}
            setSelectedAviso={setSelectedAviso}
          />
        )}

        {activeView === 'actividades' && (
          <ActividadesView
            actividades={actividades}
            currentRole={currentRole}
            onCrearActividad={handleCrearActividad}
            selectedActividad={selectedActividad}
            setSelectedActividad={setSelectedActividad}
          />
        )}

        {activeView === 'periodico' && (
          <PeriodicoView
            articulos={articulos}
            ediciones={ediciones}
            edicionActiva={edicionActiva}
            onSelectEdicion={setEdicionActiva}
            selectedArticulo={selectedArticulo}
            setSelectedArticulo={setSelectedArticulo}
            setActiveView={setActiveView}
          />
        )}

        {activeView === 'proponer' && (
          <ProponerArticuloView
            propuestas={propuestas}
            onEnviarPropuesta={handleEnviarPropuesta}
            currentRole={currentRole}
          />
        )}

        {activeView === 'galeria' && (
          <GaleriaView
            fotos={fotos}
          />
        )}

        {activeView === 'contacto' && (
          <ContactoView />
        )}

        {activeView === 'admin' && (
          <AdminDashboard
            currentRole={currentRole}
            setCurrentRole={setCurrentRole}
            avisos={avisos}
            actividades={actividades}
            articulos={articulos}
            ediciones={ediciones}
            propuestas={propuestas}
            usuarios={usuarios}
            auditoria={auditoria}
            onActualizarEstadoPropuesta={handleActualizarEstadoPropuesta}
            onEliminarAviso={handleEliminarAviso}
            onCambiarEstadoAviso={handleCambiarEstadoAviso}
            onEliminarActividad={handleEliminarActividad}
          />
        )}
      </main>

      {/* 3. Institutional Footer */}
      <Footer setActiveView={setActiveView} />

    </div>
  );
}
