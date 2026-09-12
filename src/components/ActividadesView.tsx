import React, { useState } from 'react';
import { Actividad, UserRole, ActivityStatus } from '../types';
import { 
  Calendar, 
  Search, 
  MapPin, 
  Clock, 
  Plus, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Users, 
  Image as ImageIcon,
  FileText,
  CalendarPlus,
  Share2
} from 'lucide-react';

interface ActividadesViewProps {
  actividades: Actividad[];
  currentRole: UserRole;
  onCrearActividad: (actividad: Omit<Actividad, 'id'>) => void;
  selectedActividad: Actividad | null;
  setSelectedActividad: (actividad: Actividad | null) => void;
}

export const ActividadesView: React.FC<ActividadesViewProps> = ({
  actividades,
  currentRole,
  onCrearActividad,
  selectedActividad,
  setSelectedActividad
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEstado, setSelectedEstado] = useState<string>('todas');
  const [selectedCategoria, setSelectedCategoria] = useState<string>('todas');
  const [showModalCrear, setShowModalCrear] = useState(false);

  // Form states
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState<Actividad['categoria']>('feria_tecnologica');
  const [nuevaFecha, setNuevaFecha] = useState('2026-10-25');
  const [nuevaHora, setNuevaHora] = useState('09:00 AM');
  const [nuevoLugar, setNuevoLugar] = useState('Auditorio LICATEBA');
  const [nuevoResponsable, setNuevoResponsable] = useState('');
  const [nuevaImagen, setNuevaImagen] = useState('https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80');

  const canCreate = ['superadmin', 'admin', 'docente'].includes(currentRole);

  const actividadesFiltradas = actividades.filter(act => {
    const matchesSearch = 
      act.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      act.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      act.lugar.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEstado = selectedEstado === 'todas' || act.estado === selectedEstado;
    const matchesCategoria = selectedCategoria === 'todas' || act.categoria === selectedCategoria;

    return matchesSearch && matchesEstado && matchesCategoria;
  });

  const handleSubmitCrear = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoTitulo.trim() || !nuevaDescripcion.trim()) return;

    onCrearActividad({
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
      categoria: nuevaCategoria,
      fecha: nuevaFecha,
      hora: nuevaHora,
      lugar: nuevoLugar,
      responsable: nuevoResponsable || 'Coordinación Pedagógica LICATEBA',
      estado: 'proxima',
      imagenPrincipal: nuevaImagen,
      asistenciaEsperada: 200
    });

    setNuevoTitulo('');
    setNuevaDescripcion('');
    setNuevoResponsable('');
    setShowModalCrear(false);
  };

  const getGoogleCalendarUrl = (act: Actividad) => {
    const title = encodeURIComponent(`[LICATEBA] ${act.titulo}`);
    const details = encodeURIComponent(`${act.descripcion}\n\nResponsable: ${act.responsable}\nLugar: ${act.lugar}`);
    const location = encodeURIComponent(`${act.lugar}, LICATEBA, Barahona, R.D.`);
    const cleanDate = act.fecha.replace(/-/g, '');
    const dates = `${cleanDate}T130000Z/${cleanDate}T170000Z`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <div className="space-y-8 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">
            <Calendar className="w-4 h-4" />
            <span>Calendario & Vida Estudiantil</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-title">
            Actividades y Eventos Institucionales
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Actos cívicos, ferias de innovación técnica, celebraciones pastorales y encuentros deportivos
          </p>
        </div>

        {canCreate && (
          <button
            type="button"
            onClick={() => setShowModalCrear(true)}
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Registrar Nueva Actividad</span>
          </button>
        )}
      </div>

      {/* Filter controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        <div className="sm:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por nombre de evento o lugar..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="sm:col-span-3">
          <select
            value={selectedEstado}
            onChange={e => setSelectedEstado(e.target.value)}
            className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-700"
          >
            <option value="todas">Todos los estados</option>
            <option value="proxima">Próximas</option>
            <option value="realizada">Realizadas</option>
            <option value="cancelada">Canceladas</option>
          </select>
        </div>

        <div className="sm:col-span-3">
          <select
            value={selectedCategoria}
            onChange={e => setSelectedCategoria(e.target.value)}
            className="w-full py-2 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-700"
          >
            <option value="todas">Todas las categorías</option>
            <option value="feria_tecnologica">Ferias Tecnológicas</option>
            <option value="religiosa_pastoral">Pastoral y Religiosas</option>
            <option value="charla">Charlas & Conferencias</option>
            <option value="deportiva">Deportivas</option>
            <option value="cultural">Culturales</option>
          </select>
        </div>
      </div>

      {/* Grid of Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actividadesFiltradas.map(act => {
          const isProxima = act.estado === 'proxima';
          const isRealizada = act.estado === 'realizada';

          return (
            <div
              key={act.id}
              onClick={() => setSelectedActividad(act)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                  <img 
                    src={act.imagenPrincipal} 
                    alt={act.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {act.categoria.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${
                      isProxima ? 'bg-amber-500 text-slate-950' : isRealizada ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                    }`}>
                      {act.estado}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-amber-700 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{act.fecha} • {act.hora}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-serif-title leading-snug">
                    {act.titulo}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {act.descripcion}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{act.lugar}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Responsable: {act.responsable}</span>
                <span className="text-blue-800 font-bold">Ver detalles →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal: View Activity Details & Calendar Action */}
      {selectedActividad && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
              <img 
                src={selectedActividad.imagenPrincipal} 
                alt={selectedActividad.titulo} 
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedActividad(null)}
                className="absolute top-3 right-3 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md uppercase">
                  {selectedActividad.categoria.replace('_', ' ')}
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md capitalize">
                  Estado: {selectedActividad.estado}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-title leading-snug">
                {selectedActividad.titulo}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Fecha y hora:</strong> {selectedActividad.fecha} a las {selectedActividad.hora}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Lugar:</strong> {selectedActividad.lugar}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Coordinador:</strong> {selectedActividad.responsable}</span>
                </div>
                {selectedActividad.asistenciaEsperada && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span><strong>Aforo esperado:</strong> {selectedActividad.asistenciaEsperada} personas</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs">Descripción del Evento</h4>
              <p>{selectedActividad.descripcion}</p>
            </div>

            {/* Photos or materials */}
            {selectedActividad.galeria && selectedActividad.galeria.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs">Evidencias Fotográficas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedActividad.galeria.map((img, i) => (
                    <img key={i} src={img} alt="Evidencia" className="rounded-xl aspect-video object-cover" />
                  ))}
                </div>
              </div>
            )}

            {/* Calendar integration button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={getGoogleCalendarUrl(selectedActividad)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>Añadir a mi Google Calendar</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedActividad(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modal: Create Activity */}
      {showModalCrear && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-lg">Programar Nueva Actividad Escolar</h3>
              <button onClick={() => setShowModalCrear(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitCrear} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nombre de la Actividad *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Feria Vocacional del Suroeste..."
                  value={nuevoTitulo}
                  onChange={e => setNuevoTitulo(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Categoría</label>
                  <select
                    value={nuevaCategoria}
                    onChange={e => setNuevaCategoria(e.target.value as Actividad['categoria'])}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  >
                    <option value="feria_tecnologica">Feria Tecnológica</option>
                    <option value="religiosa_pastoral">Pastoral / Religiosa</option>
                    <option value="charla">Charla / Conferencia</option>
                    <option value="deportiva">Deportiva</option>
                    <option value="cultural">Cultural</option>
                    <option value="excursion">Excursión</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Responsable</label>
                  <input
                    type="text"
                    placeholder="Profesor o departamento coordinador"
                    value={nuevoResponsable}
                    onChange={e => setNuevoResponsable(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Fecha</label>
                  <input
                    type="date"
                    required
                    value={nuevaFecha}
                    onChange={e => setNuevaFecha(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Hora</label>
                  <input
                    type="text"
                    value={nuevaHora}
                    onChange={e => setNuevaHora(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lugar</label>
                  <input
                    type="text"
                    value={nuevoLugar}
                    onChange={e => setNuevoLugar(e.target.value)}
                    className="w-full p-2 border border-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Descripción y Objetivos *</label>
                <textarea
                  required
                  rows={3}
                  value={nuevaDescripcion}
                  onChange={e => setNuevaDescripcion(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                ></textarea>
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
                  Registrar Actividad
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
