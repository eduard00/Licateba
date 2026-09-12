import React, { useState } from 'react';
import { Aviso, UserRole, PriorityLevel, AudienceTarget } from '../types';
import { 
  Bell, 
  Search, 
  Filter, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Download, 
  ExternalLink, 
  Plus, 
  X, 
  CheckCircle2, 
  Users,
  ShieldCheck
} from 'lucide-react';

interface AvisosViewProps {
  avisos: Aviso[];
  currentRole: UserRole;
  onCrearAviso: (aviso: Omit<Aviso, 'id'>) => void;
  selectedAviso: Aviso | null;
  setSelectedAviso: (aviso: Aviso | null) => void;
}

export const AvisosView: React.FC<AvisosViewProps> = ({
  avisos,
  currentRole,
  onCrearAviso,
  selectedAviso,
  setSelectedAviso
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrioridad, setSelectedPrioridad] = useState<string>('todas');
  const [selectedDestinatario, setSelectedDestinatario] = useState<string>('todos');
  const [showModalCrear, setShowModalCrear] = useState(false);

  // Form state for creating notice
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevoContenido, setNuevoContenido] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState<Aviso['categoria']>('comunicado');
  const [nuevaPrioridad, setNuevaPrioridad] = useState<PriorityLevel>('normal');
  const [nuevoDestinatario, setNuevoDestinatario] = useState<AudienceTarget>('todos');
  const [nuevaFechaExpiracion, setNuevaFechaExpiracion] = useState('2026-10-31');
  const [nuevoNombreAdjunto, setNuevoNombreAdjunto] = useState('');

  const canCreateAviso = ['superadmin', 'admin'].includes(currentRole);

  // Filter avisos
  const avisosFiltrados = avisos.filter(aviso => {
    const matchesSearch = 
      aviso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aviso.contenido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aviso.autor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrioridad = selectedPrioridad === 'todas' || aviso.prioridad === selectedPrioridad;
    const matchesDestinatario = selectedDestinatario === 'todos' || aviso.destinatario === selectedDestinatario || aviso.destinatario === 'todos';

    return matchesSearch && matchesPrioridad && matchesDestinatario;
  });

  const handleSubmitCrear = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoTitulo.trim() || !nuevoContenido.trim()) return;

    onCrearAviso({
      titulo: nuevoTitulo,
      contenido: nuevoContenido,
      categoria: nuevaCategoria,
      prioridad: nuevaPrioridad,
      destinatario: nuevoDestinatario,
      fechaPublicacion: new Date().toISOString().split('T')[0],
      fechaExpiracion: nuevaFechaExpiracion,
      autor: 'Equipo Directivo LICATEBA',
      autorCargo: 'Administración y Pastoral',
      archivoAdjunto: nuevoNombreAdjunto.trim() ? {
        nombre: nuevoNombreAdjunto.trim(),
        url: 'https://drive.google.com/file/d/licateba-adjunto/view',
        tamano: '480 KB'
      } : undefined,
      estado: 'publicado'
    });

    // Reset form
    setNuevoTitulo('');
    setNuevoContenido('');
    setNuevoNombreAdjunto('');
    setShowModalCrear(false);
  };

  return (
    <div className="space-y-8 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">
            <Bell className="w-4 h-4" />
            <span>Tablón Institucional en la Nube</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-title">
            Avisos y Comunicados Oficiales
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Sincronizados en tiempo real mediante Google Sheets & Apps Script
          </p>
        </div>

        {canCreateAviso && (
          <button
            type="button"
            onClick={() => setShowModalCrear(true)}
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Publicar Nuevo Aviso</span>
          </button>
        )}
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        
        {/* Search */}
        <div className="sm:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por título, palabra clave o remitente..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Priority Filter */}
        <div className="sm:col-span-3">
          <select
            value={selectedPrioridad}
            onChange={e => setSelectedPrioridad(e.target.value)}
            className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-700"
          >
            <option value="todas">Todas las prioridades</option>
            <option value="urgente">Solo Urgentes</option>
            <option value="alta">Prioridad Alta</option>
            <option value="normal">Prioridad Normal</option>
          </select>
        </div>

        {/* Audience Filter */}
        <div className="sm:col-span-3">
          <select
            value={selectedDestinatario}
            onChange={e => setSelectedDestinatario(e.target.value)}
            className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-700"
          >
            <option value="todos">Todos los destinatarios</option>
            <option value="estudiantes">Para Estudiantes</option>
            <option value="padres">Para Padres / APMAE</option>
            <option value="docentes">Para Docentes</option>
          </select>
        </div>

      </div>

      {/* Notices Cards Grid */}
      {avisosFiltrados.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <Bell className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-slate-700">No se encontraron avisos</h3>
          <p className="text-xs text-slate-400">Intenta ajustar los términos de búsqueda o filtros seleccionados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {avisosFiltrados.map(aviso => {
            const isUrgent = aviso.prioridad === 'urgente';
            const isHigh = aviso.prioridad === 'alta';

            return (
              <div
                key={aviso.id}
                onClick={() => setSelectedAviso(aviso)}
                className={`bg-white rounded-2xl p-6 border transition-all cursor-pointer hover:shadow-md flex flex-col justify-between ${
                  isUrgent
                    ? 'border-rose-300 bg-rose-50/20'
                    : isHigh
                    ? 'border-amber-300 bg-amber-50/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  
                  {/* Badge line */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isUrgent
                          ? 'bg-rose-600 text-white'
                          : isHigh
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {aviso.prioridad}
                      </span>
                      <span className="text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-md capitalize">
                        {aviso.categoria}
                      </span>
                    </div>

                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {aviso.fechaPublicacion}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug hover:text-blue-900 transition-colors font-serif-title">
                    {aviso.titulo}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {aviso.contenido}
                  </p>

                  {/* Attachment badge */}
                  {aviso.archivoAdjunto && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs">
                      <FileText className="w-3.5 h-3.5 text-red-600" />
                      <span className="font-medium truncate max-w-[200px]">{aviso.archivoAdjunto.nombre}</span>
                      <span className="text-slate-400">({aviso.archivoAdjunto.tamano})</span>
                    </div>
                  )}

                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Destinado a: <strong className="text-slate-700 capitalize">{aviso.destinatario}</strong></span>
                  <span className="text-blue-800 font-semibold hover:underline">
                    Ver comunicado completo →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal: View Full Notice */}
      {selectedAviso && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                    selectedAviso.prioridad === 'urgente'
                      ? 'bg-rose-600 text-white'
                      : selectedAviso.prioridad === 'alta'
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    Prioridad {selectedAviso.prioridad}
                  </span>
                  <span className="text-xs text-slate-500">
                    Publicado el {selectedAviso.fechaPublicacion}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-title leading-snug">
                  {selectedAviso.titulo}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAviso(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {selectedAviso.contenido}
            </div>

            {selectedAviso.archivoAdjunto && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{selectedAviso.archivoAdjunto.nombre}</p>
                    <p className="text-[11px] text-slate-500">Documento oficial en Google Drive • {selectedAviso.archivoAdjunto.tamano}</p>
                  </div>
                </div>
                <a
                  href={selectedAviso.archivoAdjunto.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar</span>
                </a>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div>
                <p className="font-semibold text-slate-800">{selectedAviso.autor}</p>
                <p>{selectedAviso.autorCargo}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAviso(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modal: Create Notice (Admin / Superadmin) */}
      {showModalCrear && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <h3 className="font-bold text-slate-900 text-lg">Publicar Aviso Oficial</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModalCrear(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitCrear} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Título del Aviso / Comunicado *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Convocatoria a reunión de APMAE..."
                  value={nuevoTitulo}
                  onChange={e => setNuevoTitulo(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Categoría</label>
                  <select
                    value={nuevaCategoria}
                    onChange={e => setNuevaCategoria(e.target.value as Aviso['categoria'])}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  >
                    <option value="comunicado">Comunicado</option>
                    <option value="suspension">Suspensión</option>
                    <option value="reunion">Reunión</option>
                    <option value="recordatorio">Recordatorio</option>
                    <option value="academico">Académico</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Prioridad</label>
                  <select
                    value={nuevaPrioridad}
                    onChange={e => setNuevaPrioridad(e.target.value as PriorityLevel)}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  >
                    <option value="normal">Normal</option>
                    <option value="alta">Alta</option>
                    <option value="urgente">Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Destinatario</label>
                  <select
                    value={nuevoDestinatario}
                    onChange={e => setNuevoDestinatario(e.target.value as AudienceTarget)}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  >
                    <option value="todos">Toda la comunidad</option>
                    <option value="estudiantes">Estudiantes</option>
                    <option value="padres">Padres / Tutores</option>
                    <option value="docentes">Docentes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Contenido Oficial *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Detalla el comunicado oficial..."
                  value={nuevoContenido}
                  onChange={e => setNuevoContenido(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Nombre del Archivo Adjunto en Google Drive (Opcional)</label>
                <input
                  type="text"
                  placeholder="Ej: Circular_Oficial_MINERD_2026.pdf"
                  value={nuevoNombreAdjunto}
                  onChange={e => setNuevoNombreAdjunto(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModalCrear(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg shadow-xs"
                >
                  Guardar y Publicar
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
