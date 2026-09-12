import React, { useState } from 'react';
import { 
  UserRole, 
  Aviso, 
  Actividad, 
  ArticuloPeriodico, 
  EdicionPeriodico, 
  PropuestaArticulo, 
  User, 
  AuditLog, 
  EditorialStatus 
} from '../types';
import { 
  ShieldCheck, 
  FileText, 
  Bell, 
  Calendar, 
  Users, 
  Newspaper, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Plus, 
  Trash2, 
  Edit3, 
  MessageSquare, 
  Search, 
  Lock, 
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
  Layers,
  Eye
} from 'lucide-react';

interface AdminDashboardProps {
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  avisos: Aviso[];
  actividades: Actividad[];
  articulos: ArticuloPeriodico[];
  ediciones: EdicionPeriodico[];
  propuestas: PropuestaArticulo[];
  usuarios: User[];
  auditoria: AuditLog[];
  onActualizarEstadoPropuesta: (id: string, nuevoEstado: EditorialStatus, feedback?: string) => void;
  onEliminarAviso: (id: string) => void;
  onCambiarEstadoAviso: (id: string, estado: Aviso['estado']) => void;
  onEliminarActividad: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentRole,
  setCurrentRole,
  avisos,
  actividades,
  articulos,
  ediciones,
  propuestas,
  usuarios,
  auditoria,
  onActualizarEstadoPropuesta,
  onEliminarAviso,
  onCambiarEstadoAviso,
  onEliminarActividad
}) => {
  const [activeTab, setActiveTab] = useState<'editorial' | 'avisos' | 'actividades' | 'usuarios' | 'auditoria'>('editorial');
  const [selectedPropuesta, setSelectedPropuesta] = useState<PropuestaArticulo | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedNewStatus, setSelectedNewStatus] = useState<EditorialStatus>('en_revision');

  // Permissions check
  const isSuperadmin = currentRole === 'superadmin';
  const isAdmin = currentRole === 'admin' || isSuperadmin;
  const isEditor = currentRole === 'editor' || isAdmin;
  const isDocente = currentRole === 'docente' || isEditor;

  if (currentRole === 'visitante' || currentRole === 'estudiante') {
    return (
      <div className="py-16 max-w-3xl mx-auto px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 font-serif-title">
          Acceso Restringido al Panel Administrativo
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Has iniciado sesión con el rol de <strong>{currentRole}</strong>. Para acceder a los módulos de gestión, editoriales o auditoría de LICATEBA, selecciona un perfil autorizado en el simulador superior.
        </p>
        <div className="flex justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setCurrentRole('editor')}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs"
          >
            Simular como Editor
          </button>
          <button
            type="button"
            onClick={() => setCurrentRole('admin')}
            className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs"
          >
            Simular como Administrador
          </button>
        </div>
      </div>
    );
  }

  // Counts
  const pendientesCount = propuestas.filter(p => p.estado === 'pendiente').length;
  const enRevisionCount = propuestas.filter(p => p.estado === 'en_revision').length;
  const aprobadasCount = propuestas.filter(p => p.estado === 'aprobado').length;

  const handleApplyEditorialChange = () => {
    if (!selectedPropuesta) return;
    onActualizarEstadoPropuesta(selectedPropuesta.id, selectedNewStatus, feedbackText);
    setSelectedPropuesta(null);
    setFeedbackText('');
  };

  return (
    <div className="space-y-8 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header & Role Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Centro de Control Institucional • LICATEBA</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-title">
            Panel de Gestión & Flujo Editorial
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Conectado a la base de datos Google Sheets y servicios de Google Workspace
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Sesión activa como:</span>
          <span className="text-xs font-bold px-3 py-1 bg-blue-900 text-white rounded-lg uppercase">
            {currentRole}
          </span>
        </div>
      </div>

      {/* 2. Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase">Propuestas</span>
            <FileText className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">{propuestas.length}</p>
          <span className="text-[10px] text-amber-700 font-bold block">{pendientesCount} por revisar</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase">Artículos</span>
            <Newspaper className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">{articulos.length}</p>
          <span className="text-[10px] text-blue-700 font-medium block">{ediciones.length} ediciones</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase">Avisos Activos</span>
            <Bell className="w-4 h-4 text-rose-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">
            {avisos.filter(a => a.estado === 'publicado').length}
          </p>
          <span className="text-[10px] text-slate-400 block">{avisos.length} en total</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase">Actividades</span>
            <Calendar className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">{actividades.length}</p>
          <span className="text-[10px] text-emerald-700 font-medium block">Próximos eventos</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase">Usuarios</span>
            <Users className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">{usuarios.length}</p>
          <span className="text-[10px] text-purple-700 font-medium block">Workspace SSO</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[11px] font-bold uppercase">Lecturas</span>
            <BarChart3 className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">4,200+</p>
          <span className="text-[10px] text-indigo-700 font-medium block">Visitas este mes</span>
        </div>

      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('editorial')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'editorial'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Bandeja Editorial ({pendientesCount} Pendientes)</span>
        </button>

        {isAdmin && (
          <>
            <button
              type="button"
              onClick={() => setActiveTab('avisos')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'avisos'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>Avisos ({avisos.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('actividades')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'actividades'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Actividades ({actividades.length})</span>
            </button>
          </>
        )}

        {isSuperadmin && (
          <button
            type="button"
            onClick={() => setActiveTab('usuarios')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'usuarios'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Usuarios & Roles</span>
          </button>
        )}

        {isAdmin && (
          <button
            type="button"
            onClick={() => setActiveTab('auditoria')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'auditoria'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Bitácora de Auditoría</span>
          </button>
        )}
      </div>

      {/* 4. TAB CONTENT: BANDEJA EDITORIAL */}
      {activeTab === 'editorial' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-serif-title">
              Artículos Propuestos por Estudiantes en Cola de Revisión
            </h3>
            <span className="text-xs text-slate-500">
              Total propuestas: {propuestas.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Estudiante</th>
                    <th className="p-3.5">Título Propuesto</th>
                    <th className="p-3.5">Categoría</th>
                    <th className="p-3.5">Fecha</th>
                    <th className="p-3.5">Estado</th>
                    <th className="p-3.5 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {propuestas.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5">
                        <p className="font-bold text-slate-900">{p.nombreEstudiante}</p>
                        <p className="text-[11px] text-slate-400">{p.cursoSeccion}</p>
                      </td>
                      <td className="p-3.5 max-w-xs truncate font-medium text-slate-800">
                        {p.tituloPropuesto}
                      </td>
                      <td className="p-3.5 capitalize text-slate-600">
                        {p.categoria.replace('_', ' ')}
                      </td>
                      <td className="p-3.5 text-slate-400 whitespace-nowrap">
                        {p.fechaEnvio}
                      </td>
                      <td className="p-3.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          p.estado === 'aprobado' || p.estado === 'publicado' ? 'bg-emerald-100 text-emerald-800' :
                          p.estado === 'requiere_correccion' ? 'bg-rose-100 text-rose-800' :
                          p.estado === 'en_revision' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {p.estado.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPropuesta(p);
                            setSelectedNewStatus(p.estado);
                            setFeedbackText(p.retroalimentacionDocente || '');
                          }}
                          className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold rounded-lg text-xs"
                        >
                          Evaluar / Corregir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Evaluate Student Proposal */}
      {selectedPropuesta && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase">
                  Evaluación Editorial • {selectedPropuesta.categoria}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif-title mt-0.5">
                  {selectedPropuesta.tituloPropuesto}
                </h3>
                <p className="text-xs text-slate-500">
                  Por: {selectedPropuesta.nombreEstudiante} ({selectedPropuesta.cursoSeccion}) • {selectedPropuesta.emailEstudiante}
                </p>
              </div>
              <button onClick={() => setSelectedPropuesta(null)} className="p-1 text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl max-h-60 overflow-y-auto leading-relaxed whitespace-pre-line border border-slate-200">
              <p className="font-bold text-slate-900 text-xs uppercase mb-1">Contenido Propuesto:</p>
              {selectedPropuesta.contenido}
            </div>

            <div className="space-y-3 pt-2">
              <label className="block font-bold text-slate-700 text-xs">Cambiar Estado Editorial:</label>
              <select
                value={selectedNewStatus}
                onChange={e => setSelectedNewStatus(e.target.value as EditorialStatus)}
                className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-lg font-bold"
              >
                <option value="pendiente">Pendiente de revisión</option>
                <option value="en_revision">En revisión (Asignado)</option>
                <option value="requiere_correccion">Requiere corrección del estudiante</option>
                <option value="aprobado">Aprobado para la próxima edición</option>
                <option value="publicado">Publicado oficialmente en el periódico</option>
                <option value="archivado">Archivado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-bold text-slate-700 text-xs">
                Retroalimentación Docente / Comentarios para el Estudiante:
              </label>
              <textarea
                rows={3}
                placeholder="Escribe comentarios, sugerencias de estilo o motivos de aprobación..."
                value={feedbackText}
                onChange={e => setFeedbackText(e.target.value)}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              ></textarea>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSelectedPropuesta(null)}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleApplyEditorialChange}
                className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg shadow-xs"
              >
                Guardar Decisión Editorial
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB CONTENT: GESTIÓN DE AVISOS */}
      {activeTab === 'avisos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-serif-title">
              Gestión de Circulares y Avisos Institucionales
            </h3>
            <span className="text-xs text-slate-500">
              Total avisos: {avisos.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Título</th>
                    <th className="p-3.5">Prioridad</th>
                    <th className="p-3.5">Destinatario</th>
                    <th className="p-3.5">Publicado</th>
                    <th className="p-3.5">Estado</th>
                    <th className="p-3.5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {avisos.map(a => (
                    <tr key={a.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 max-w-sm truncate">
                        {a.titulo}
                      </td>
                      <td className="p-3.5 uppercase font-bold text-[10px]">
                        {a.prioridad}
                      </td>
                      <td className="p-3.5 capitalize text-slate-600">
                        {a.destinatario}
                      </td>
                      <td className="p-3.5 text-slate-400">
                        {a.fechaPublicacion}
                      </td>
                      <td className="p-3.5">
                        <button
                          type="button"
                          onClick={() => onCambiarEstadoAviso(a.id, a.estado === 'publicado' ? 'archivado' : 'publicado')}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            a.estado === 'publicado' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {a.estado}
                        </button>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => onEliminarAviso(a.id)}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                          title="Eliminar aviso"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB CONTENT: GESTIÓN DE ACTIVIDADES */}
      {activeTab === 'actividades' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-serif-title">
              Gestión de Actividades y Calendario Escolar
            </h3>
            <span className="text-xs text-slate-500">
              Total eventos: {actividades.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Actividad</th>
                    <th className="p-3.5">Fecha & Hora</th>
                    <th className="p-3.5">Lugar</th>
                    <th className="p-3.5">Coordinador</th>
                    <th className="p-3.5">Estado</th>
                    <th className="p-3.5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {actividades.map(act => (
                    <tr key={act.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 max-w-xs truncate">
                        {act.titulo}
                      </td>
                      <td className="p-3.5 text-slate-600 whitespace-nowrap">
                        {act.fecha} • {act.hora}
                      </td>
                      <td className="p-3.5 text-slate-600">
                        {act.lugar}
                      </td>
                      <td className="p-3.5 text-slate-600">
                        {act.responsable}
                      </td>
                      <td className="p-3.5 uppercase font-bold text-[10px]">
                        <span className={`px-2 py-0.5 rounded-full ${
                          act.estado === 'proxima' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {act.estado}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => onEliminarActividad(act.id)}
                          className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                          title="Eliminar actividad"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 7. TAB CONTENT: USUARIOS Y MATRIZ DE ROLES */}
      {activeTab === 'usuarios' && isSuperadmin && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-serif-title">
              Directorio de Cuentas de Google Workspace (@licateba.edu.do)
            </h3>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
              ✓ Sincronización SSO Activa
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Usuario</th>
                    <th className="p-3.5">Email Institucional</th>
                    <th className="p-3.5">Rol de Sistema</th>
                    <th className="p-3.5">Área / Curso</th>
                    <th className="p-3.5">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {usuarios.map(u => (
                    <tr key={u.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                        <img src={u.fotoUrl} alt="" className="w-7 h-7 rounded-full object-cover" />
                        <span>{u.nombre}</span>
                      </td>
                      <td className="p-3.5 text-slate-600 font-mono text-[11px]">
                        {u.email}
                      </td>
                      <td className="p-3.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-900 border border-blue-200 rounded-md uppercase">
                          {u.rol}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-600">
                        {u.departamentoOCurso}
                      </td>
                      <td className="p-3.5">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Activo
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 8. TAB CONTENT: BITÁCORA DE AUDITORÍA */}
      {activeTab === 'auditoria' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-serif-title">
              Bitácora Inmutable de Acciones Administrativas (Hoja Auditoria)
            </h3>
            <span className="text-xs text-slate-500">
              Registros cronológicos
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Fecha y Hora</th>
                    <th className="p-3.5">Usuario Workspace</th>
                    <th className="p-3.5">Módulo</th>
                    <th className="p-3.5">Acción</th>
                    <th className="p-3.5">Detalles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  {auditoria.map(log => (
                    <tr key={log.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 text-slate-500 whitespace-nowrap">
                        {log.fechaHora}
                      </td>
                      <td className="p-3.5 font-bold text-slate-800">
                        {log.usuario}
                      </td>
                      <td className="p-3.5 text-blue-700 font-semibold">
                        {log.modulo}
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                          {log.accion}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-600 font-sans text-xs">
                        {log.detalles}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
