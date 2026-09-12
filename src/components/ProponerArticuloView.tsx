import React, { useState } from 'react';
import { PropuestaArticulo, UserRole, EditorialStatus } from '../types';
import { 
  PenTool, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Image as ImageIcon, 
  Link2, 
  Sparkles, 
  ArrowRight,
  Clock,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface ProponerArticuloViewProps {
  propuestas: PropuestaArticulo[];
  onEnviarPropuesta: (propuesta: Omit<PropuestaArticulo, 'id' | 'fechaEnvio' | 'estado'>) => void;
  currentRole: UserRole;
}

export const ProponerArticuloView: React.FC<ProponerArticuloViewProps> = ({
  propuestas,
  onEnviarPropuesta,
  currentRole
}) => {
  const [nombre, setNombre] = useState('Carlos Manuel Matos');
  const [email, setEmail] = useState('carlos.matos24@licateba.edu.do');
  const [cursoSeccion, setCursoSeccion] = useState('6to Informática - Sección A');
  const [tema, setTema] = useState('');
  const [categoria, setCategoria] = useState('tecnologia');
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [autorizacion, setAutorizacion] = useState(false);
  const [enviadoExitoso, setEnviadoExitoso] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim() || !contenido.trim() || !autorizacion) return;

    onEnviarPropuesta({
      nombreEstudiante: nombre,
      emailEstudiante: email,
      cursoSeccion: cursoSeccion,
      tema: tema || 'Vida Escolar y Tecnología',
      categoria: categoria,
      tituloPropuesto: titulo,
      contenido: contenido,
      fotografiaUrl: fotoUrl.trim() || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
      documentoUrl: docUrl.trim() || undefined,
      autorizacionPublicacion: autorizacion
    });

    setEnviadoExitoso(true);
    setTitulo('');
    setContenido('');
    setTema('');
    setFotoUrl('');
    setDocUrl('');
    setAutorizacion(false);

    setTimeout(() => {
      setEnviadoExitoso(false);
    }, 6000);
  };

  // Mis propuestas
  const misPropuestas = propuestas.filter(p => p.emailEstudiante === email || currentRole === 'estudiante');

  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Voz Estudiantil • Periódico Escolar Digital</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif-title tracking-tight">
          Proponer Artículo para "LICATEBA Informa"
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          ¿Tienes un proyecto técnico, investigación científica, reseña literaria o crónica sobre Barahona? Completa este formulario institucional para someterlo a la revisión del Consejo Editorial.
        </p>
      </div>

      {/* 2. Visual Diagram of the Editorial Workflow */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
          Flujo Editorial Oficial de Publicación
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
          {[
            { step: '1', title: 'Borrador', desc: 'Redacción inicial del alumno', color: 'border-slate-300 bg-slate-50 text-slate-700' },
            { step: '2', title: 'Pendiente', desc: 'Enviado al Consejo', color: 'border-amber-300 bg-amber-50 text-amber-800' },
            { step: '3', title: 'En Revisión', desc: 'Profesor asesor evalúa', color: 'border-blue-300 bg-blue-50 text-blue-800' },
            { step: '4', title: 'Corrección', desc: 'Ajustes solicitados', color: 'border-rose-300 bg-rose-50 text-rose-800' },
            { step: '5', title: 'Aprobado', desc: 'Listo para maquetar', color: 'border-emerald-300 bg-emerald-50 text-emerald-800' },
            { step: '6', title: 'Publicado', desc: 'Visible en el periódico', color: 'border-purple-300 bg-purple-50 text-purple-800 font-bold' },
            { step: '7', title: 'Archivado', desc: 'Historial permanente', color: 'border-slate-300 bg-slate-100 text-slate-600' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`p-3 rounded-xl border text-center space-y-1 ${item.color}`}
            >
              <span className="text-[10px] font-bold opacity-60">Paso {item.step}</span>
              <p className="text-xs font-bold leading-tight">{item.title}</p>
              <p className="text-[10px] opacity-80 leading-tight hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 3. The Form */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          
          {enviadoExitoso && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">¡Propuesta enviada con éxito!</h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Tu artículo ha sido registrado en la hoja de cálculo de Google Sheets de LICATEBA y se envió un correo automático al Consejo Editorial. Puedes monitorear su estado en la barra lateral.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nombre Completo del Estudiante *</label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Correo Institucional (@licateba.edu.do) *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Curso y Sección *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: 6to Informática A"
                  value={cursoSeccion}
                  onChange={e => setCursoSeccion(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Categoría del Artículo *</label>
                <select
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg"
                >
                  <option value="tecnologia">Tecnología & Robótica</option>
                  <option value="ciencia">Ciencia</option>
                  <option value="cultura">Cultura & Arte</option>
                  <option value="deportes">Deportes</option>
                  <option value="literatura">Literatura & Poesía</option>
                  <option value="entrevistas">Entrevistas</option>
                  <option value="opinion">Opinión Estudiantil</option>
                  <option value="vida_estudiantil">Vida Escolar</option>
                  <option value="proyectos">Proyectos Técnicos</option>
                  <option value="medio_ambiente">Medio Ambiente & Enriquillo</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Tema Principal *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Inteligencia Artificial en Barahona"
                  value={tema}
                  onChange={e => setTema(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Título Propuesto para el Artículo *</label>
              <input
                type="text"
                required
                placeholder="Un titular atractivo y riguroso..."
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Contenido Completo del Artículo *</label>
              <textarea
                required
                rows={8}
                placeholder="Escribe o pega el cuerpo de tu artículo. Procura incluir introducción, desarrollo con datos o argumentos, y conclusión..."
                value={contenido}
                onChange={e => setContenido(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none leading-relaxed"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Enlace a Fotografía de Portada (Google Drive o URL)
                </label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/... o enlace de imagen"
                  value={fotoUrl}
                  onChange={e => setFotoUrl(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Enlace a Google Docs con el borrador (Opcional)
                </label>
                <input
                  type="url"
                  placeholder="https://docs.google.com/document/d/..."
                  value={docUrl}
                  onChange={e => setDocUrl(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg"
                />
              </div>
            </div>

            {/* Authorization Checkbox */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={autorizacion}
                  onChange={e => setAutorizacion(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-900 border-slate-300 rounded focus:ring-blue-600"
                />
                <span className="text-slate-700 leading-relaxed">
                  <strong>Autorización para Publicación Institucional:</strong> Declaro que este texto es de mi autoría original y autorizo al Comité Editorial del Liceo Católico Tecnológico de Barahona a revisar, corregir el estilo y divulgar el artículo en el Periódico Digital y medios institucionales.
                </span>
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-slate-950 font-black px-6 py-3 rounded-xl shadow-md transition-all text-xs"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Propuesta a Revisión</span>
              </button>
            </div>

          </form>

        </div>

        {/* 4. Tracking Student's Submissions */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Mis Artículos Enviados
              </h3>
              <span className="text-[11px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                {misPropuestas.length} registrados
              </span>
            </div>

            {misPropuestas.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-6">
                Aún no has enviado propuestas con este correo. Llena el formulario para comenzar.
              </p>
            ) : (
              <div className="space-y-3">
                {misPropuestas.map(p => (
                  <div key={p.id} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50 space-y-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900 truncate max-w-[180px]">
                        {p.tituloPropuesto}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        p.estado === 'aprobado' ? 'bg-emerald-100 text-emerald-800' :
                        p.estado === 'requiere_correccion' ? 'bg-rose-100 text-rose-800' :
                        p.estado === 'en_revision' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {p.estado.replace('_', ' ')}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500">
                      Enviado el {p.fechaEnvio} • Cat: {p.categoria}
                    </p>

                    {p.retroalimentacionDocente && (
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-700">
                        <span className="font-semibold text-blue-900 block mb-0.5 flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" /> Nota del Docente ({p.revisorAsignado}):
                        </span>
                        {p.retroalimentacionDocente}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tips for students */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Criterios Editoriales LICATEBA
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Ortografía y sintaxis cuidada.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Alineación con valores éticos y cristianos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Citar fuentes fidedignas en temas técnicos.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
