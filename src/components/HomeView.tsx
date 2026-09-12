import React from 'react';
import { 
  ActiveView, 
  Aviso, 
  Actividad, 
  ArticuloPeriodico, 
  EdicionPeriodico 
} from '../types';
import { INSTITUCION_INFO, AREAS_TECNICAS } from '../data/initialData';
import { LicatebaLogo } from './logos/LicatebaLogo';
import { MinerdDETPLogo } from './logos/MinerdDETPLogo';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Bell, 
  Newspaper, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Heart,
  Users,
  Eye
} from 'lucide-react';

interface HomeViewProps {
  setActiveView: (view: ActiveView) => void;
  avisos: Aviso[];
  actividades: Actividad[];
  articulos: ArticuloPeriodico[];
  edicionActiva?: EdicionPeriodico;
  onSelectArticulo: (art: ArticuloPeriodico) => void;
  onSelectAviso: (aviso: Aviso) => void;
  onSelectActividad: (act: Actividad) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveView,
  avisos,
  actividades,
  articulos,
  edicionActiva,
  onSelectArticulo,
  onSelectAviso,
  onSelectActividad
}) => {
  // Filter top avisos
  const avisosPublicados = avisos
    .filter(a => a.estado === 'publicado')
    .slice(0, 3);

  // Filter next activities
  const proximasActividades = actividades
    .filter(a => a.estado === 'proxima')
    .slice(0, 3);

  // Filter newspaper articles for spotlight
  const articuloPrincipal = articulos.find(a => a.destacadoEnPortada) || articulos[0];
  const articulosSecundarios = articulos
    .filter(a => a.id !== articuloPrincipal?.id && a.estado === 'publicado')
    .slice(0, 3);

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO BANNER INSTITUCIONAL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Soft atmospheric gradient accents */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Main Institutional Headlines */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-200 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>Portal Oficial • Año Escolar 2026-2027</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Acreditado MINERD • Modalidad Técnico Profesional</span>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4 pt-2">
                <div className="shrink-0 p-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 shadow-2xl">
                  <LicatebaLogo className="h-16 sm:h-20 w-auto" variant="full" />
                </div>
                <div className="space-y-1">
                  <p className="text-amber-400 font-cinzel text-xs sm:text-sm tracking-wider uppercase font-semibold">
                    Diócesis de Barahona • República Dominicana
                  </p>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                    Liceo Católico Tecnológico <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-white">
                      de Barahona — LICATEBA
                    </span>
                  </h1>
                </div>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Formamos bachilleres técnicos con sólida vocación cristiana, liderazgo ético y dominio de vanguardia en desarrollo de software, redes informáticas, gestión contable y automatización eléctrica en el Sur dominicano.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveView('periodico')}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-600/20 transition-all text-sm"
                >
                  <Newspaper className="w-4 h-4 text-slate-950" />
                  <span>Leer Periódico Escolar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveView('avisos')}
                  className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-medium px-5 py-3 rounded-xl border border-slate-700 transition-all text-sm"
                >
                  <Bell className="w-4 h-4 text-amber-400" />
                  <span>Avisos Recientes</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveView('proponer')}
                  className="flex items-center gap-2 bg-blue-900/60 hover:bg-blue-900 text-blue-200 font-medium px-4 py-3 rounded-xl border border-blue-700/50 transition-all text-sm"
                >
                  <span>Proponer Artículo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick stats pills */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">4</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Áreas Técnicas Profesionales</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white">+850</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Estudiantes Formados con Valores</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-blue-400">100%</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Inserción en Pasantías y Universidad</p>
                </div>
              </div>

            </div>

            {/* Right Col: Rector Card & Campus Feature */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card Mensaje del Rector */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-700/80 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-amber-500 overflow-hidden shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&auto=format&fit=crop&q=80" 
                      alt="Rector de LICATEBA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-tight">
                      {INSTITUCION_INFO.rector}
                    </h2>
                    <p className="text-xs text-amber-400 font-medium">Rector & Director General</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-amber-500 pl-3 py-1 font-serif-title">
                  "En LICATEBA creemos que la tecnología cobra su verdadero sentido cuando ilumina la dignidad humana. Nuestra misión en Barahona es forjar manos laboriosas, mentes brillantes y corazones compasivos inspirados por el Evangelio."
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Conoce nuestra historia y valores</span>
                  <button
                    type="button"
                    onClick={() => setActiveView('nosotros')}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    <span>Ver Nosotros</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Fast Shortcut Bar */}
              <div className="grid grid-cols-2 gap-3">
                <div 
                  onClick={() => setActiveView('actividades')}
                  className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 p-3.5 rounded-xl cursor-pointer transition-colors group"
                >
                  <Calendar className="w-5 h-5 text-blue-400 mb-1.5 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-bold text-white">Agenda Escolar</p>
                  <p className="text-[11px] text-slate-400">Próximos actos y ferias</p>
                </div>

                <div 
                  onClick={() => setActiveView('arquitectura')}
                  className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 p-3.5 rounded-xl cursor-pointer transition-colors group"
                >
                  <Cpu className="w-5 h-5 text-emerald-400 mb-1.5 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-bold text-white">Google Workspace</p>
                  <p className="text-[11px] text-slate-400">Drive, Sheets & Apps Script</p>
                </div>
              </div>

            </div>

          </div>

          {/* Institutional Accreditation Endorsement Strip (LICATEBA + MINERD & DETP) */}
          <div className="mt-12 pt-8 border-t border-slate-800/90">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Licateba Brand */}
              <div className="flex items-center gap-4 text-left">
                <div className="p-1.5 bg-slate-950/80 rounded-xl border border-slate-800 shrink-0">
                  <LicatebaLogo className="h-12 w-auto" variant="full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-white tracking-tight">Liceo Católico Tecnológico de Barahona</span>
                    <span className="bg-blue-900/70 text-blue-300 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-700/50">
                      RNC / MINERD: 04018
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fundado en 1998 • Diócesis de Barahona • Distrito Educativo 01-03
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-slate-800 hidden lg:block"></div>

              {/* Official Minerd & DETP Logo Banner */}
              <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-xl shadow-md shrink-0">
                <MinerdDETPLogo className="h-10 sm:h-11 w-auto" variant="full" />
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-slate-800 hidden lg:block"></div>

              {/* Endorsement Note */}
              <div className="text-center lg:text-right text-xs">
                <span className="text-amber-400 font-bold block text-xs">
                  Acreditación de Título Técnico
                </span>
                <span className="text-slate-400 text-[11px] block mt-0.5">
                  Especialidades avaladas por la Dirección de Educación Técnico Profesional
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. AVISOS INSTITUCIONALES DESTACADOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
              <Bell className="w-4 h-4" />
              <span>Comunicación Oficial</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Avisos y Circulares Recientes
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActiveView('avisos')}
            className="text-xs font-semibold text-blue-800 hover:text-blue-900 flex items-center gap-1 shrink-0"
          >
            <span>Ver todos los avisos ({avisos.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {avisosPublicados.map(aviso => {
            const isUrgent = aviso.prioridad === 'urgente';
            const isHigh = aviso.prioridad === 'alta';
            return (
              <div
                key={aviso.id}
                onClick={() => onSelectAviso(aviso)}
                className={`rounded-2xl p-5 border transition-all cursor-pointer hover:shadow-md flex flex-col justify-between ${
                  isUrgent
                    ? 'bg-rose-50/50 border-rose-200 hover:border-rose-400'
                    : isHigh
                    ? 'bg-amber-50/40 border-amber-200 hover:border-amber-400'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      isUrgent
                        ? 'bg-rose-600 text-white'
                        : isHigh
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      Prioridad {aviso.prioridad}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {aviso.fechaPublicacion}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 mb-2 hover:text-blue-800 transition-colors">
                    {aviso.titulo}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {aviso.contenido}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-slate-500">
                    Para: <strong className="text-slate-700 capitalize">{aviso.destinatario}</strong>
                  </span>
                  <span className="text-blue-700 font-semibold flex items-center gap-1 text-[11px]">
                    Leer más <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PERIÓDICO ESCOLAR DIGITAL "LICATEBA INFORMA" SPOTLIGHT */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header of Newspaper Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-1 font-serif-title">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Voz y Pensamiento de Nuestra Comunidad</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight font-serif-title">
                Periódico Escolar Digital: "LICATEBA Informa"
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {edicionActiva ? `${edicionActiva.numero} • ${edicionActiva.fechaPublicacion}: "${edicionActiva.titulo}"` : 'Edición Escolar'}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setActiveView('proponer')}
                className="text-xs font-semibold bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 px-3.5 py-2 rounded-lg shadow-2xs transition-colors"
              >
                + Proponer Artículo
              </button>
              <button
                type="button"
                onClick={() => setActiveView('periodico')}
                className="text-xs font-semibold bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5"
              >
                <span>Ver Portada Completa</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Newspaper Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Lead Article (Big Feature) */}
            {articuloPrincipal && (
              <div 
                onClick={() => onSelectArticulo(articuloPrincipal)}
                className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img 
                    src={articuloPrincipal.imagenDestacada} 
                    alt={articuloPrincipal.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                      Titular Principal
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="font-semibold text-blue-700 uppercase tracking-wide">
                      {articuloPrincipal.categoria.replace('_', ' ')}
                    </span>
                    <span>•</span>
                    <span>{articuloPrincipal.fecha}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {articuloPrincipal.visitas} lecturas
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-serif-title leading-tight">
                    {articuloPrincipal.titulo}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {articuloPrincipal.subtitulo}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">
                      Por: <strong className="text-slate-900">{articuloPrincipal.autor}</strong> ({articuloPrincipal.cursoOSeccion})
                    </span>
                    <span className="text-blue-800 font-bold flex items-center gap-1">
                      Leer artículo completo <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Articles List */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm divide-y divide-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-3">
                  Más Publicaciones de Esta Edición
                </h4>

                {articulosSecundarios.map(art => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArticulo(art)}
                    className="py-3.5 first:pt-2 last:pb-0 cursor-pointer group flex gap-3.5 items-start"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={art.imagenDestacada} 
                        alt={art.titulo} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        {art.categoria.replace('_', ' ')}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-blue-900 font-serif-title leading-snug">
                        {art.titulo}
                      </h5>
                      <p className="text-[11px] text-slate-500">
                        {art.autor} • {art.fecha}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Callout box for students to submit articles */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-900 to-indigo-950 text-white space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Espacio para Estudiantes y Docentes</span>
                </div>
                <h4 className="text-base font-bold font-serif-title leading-tight">
                  ¿Tienes una investigación, poema, reportaje o proyecto técnico?
                </h4>
                <p className="text-xs text-blue-200 leading-relaxed">
                  Envía tu propuesta para que sea evaluada por el Consejo Editorial de LICATEBA y publicada en la próxima entrega oficial.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveView('proponer')}
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Llenar Formulario de Propuesta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. PRÓXIMAS ACTIVIDADES Y CALENDARIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Vida Escolar & Fechas Clave</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Próximas Actividades y Eventos
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActiveView('actividades')}
            className="text-xs font-semibold text-blue-800 hover:text-blue-900 flex items-center gap-1 shrink-0"
          >
            <span>Ver calendario completo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proximasActividades.map(act => (
            <div
              key={act.id}
              onClick={() => onSelectActividad(act)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                  <img 
                    src={act.imagenPrincipal} 
                    alt={act.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {act.categoria.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-amber-700 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{act.fecha} • {act.hora}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug line-clamp-2">
                    {act.titulo}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {act.descripcion}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{act.lugar}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Coordina: {act.responsable}</span>
                <span className="text-blue-800 font-semibold flex items-center gap-1">
                  Detalles <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OFERTA TÉCNICO PROFESIONAL PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Modalidad Técnico Profesional en Barahona
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Especialidades Técnicas de Alto Nivel para el Futuro
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              En LICATEBA combinamos laboratorios modernos, docentes certificados por el MINERD e INFOTEP, y convenios de pasantía laboral para garantizar la preparación de nuestros bachilleres técnicos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AREAS_TECNICAS.map(area => (
              <div 
                key={area.id}
                onClick={() => setActiveView('nosotros')}
                className="bg-white/10 backdrop-blur-xs hover:bg-white/15 border border-white/10 rounded-xl p-5 cursor-pointer transition-all group"
              >
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                  {area.sigla}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                  {area.nombre}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {area.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-300">
              Duración: 3 años de formación especializada (4to, 5to y 6to de Secundaria)
            </span>
            <button
              type="button"
              onClick={() => setActiveView('nosotros')}
              className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Ver Plan de Estudios Completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
