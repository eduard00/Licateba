import React, { useState } from 'react';
import { INSTITUCION_INFO } from '../data/initialData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Layers, 
  Code, 
  ExternalLink, 
  FileSpreadsheet, 
  HardDrive, 
  Globe, 
  ShieldCheck,
  Building2,
  HelpCircle
} from 'lucide-react';

export const ContactoView: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('admisiones');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [showTechGuide, setShowTechGuide] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) return;
    setEnviado(true);
    setNombre('');
    setEmail('');
    setMensaje('');
    setTimeout(() => setEnviado(false), 6000);
  };

  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-900 font-cinzel">
          Comunícate con Nosotros
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-title">
          Contacto y Ubicación Institucional
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Estamos a tu disposición para consultas de admisiones técnicas, solicitudes de récord de notas, vinculación con empresas o pastoral educativa.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Details Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
            <h2 className="text-lg font-bold text-slate-900 font-serif-title">
              Información de la Sede Barahona
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Dirección Física</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {INSTITUCION_INFO.direccion}, Barahona, República Dominicana.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Central Telefónica</h4>
                  <p className="text-slate-600">
                    {INSTITUCION_INFO.telefono}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Ext. 101 Dirección • Ext. 104 Registro • Ext. 108 Talleres
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Correos Electrónicos</h4>
                  <p className="text-slate-600">
                    info@licateba.edu.do • admisiones@licateba.edu.do
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horario Institucional</h4>
                  <p className="text-slate-600">
                    Lunes a Viernes: 7:30 AM – 4:30 PM
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Jornada Escolar Extendida y Talleres Técnicos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Department Directory */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 space-y-4">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-cinzel">
              Directorio de Departamentos
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div>
                  <p className="font-bold text-slate-200">Dirección y Rectoría</p>
                  <p className="text-[11px] text-slate-400">P. Marcos Pérez</p>
                </div>
                <span className="font-mono text-amber-300 text-[11px]">direccion@licateba.edu.do</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div>
                  <p className="font-bold text-slate-200">Coordinación Técnica</p>
                  <p className="text-[11px] text-slate-400">Ing. Nelson Medina</p>
                </div>
                <span className="font-mono text-amber-300 text-[11px]">tecnica@licateba.edu.do</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div>
                  <p className="font-bold text-slate-200">Registro & Archivo</p>
                  <p className="text-[11px] text-slate-400">Lic. Ramona Peña</p>
                </div>
                <span className="font-mono text-amber-300 text-[11px]">registro@licateba.edu.do</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-200">Periódico & Prensa</p>
                  <p className="text-[11px] text-slate-400">Comité Editorial Estudiantil</p>
                </div>
                <span className="font-mono text-amber-300 text-[11px]">periodico@licateba.edu.do</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 font-serif-title">
              Envíanos un Mensaje
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Las consultas son canalizadas directamente al departamento correspondiente mediante Google Workspace.
            </p>
          </div>

          {enviado && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">¡Mensaje recibido con éxito!</h4>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Hemos enviado una copia a tu correo y el equipo de LICATEBA te responderá en un plazo máximo de 24 horas hábiles.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre y apellidos"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Motivo o Departamento *</label>
              <select
                value={asunto}
                onChange={e => setAsunto(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg"
              >
                <option value="admisiones">Admisiones y Cupos Nuevo Ingreso</option>
                <option value="record_notas">Solicitud de Récord de Notas o Certificaciones</option>
                <option value="pasantias">Pasantías Técnicas y Vinculación Empresarial</option>
                <option value="periodico">Comité Editorial Periódico Escolar</option>
                <option value="pastoral">Pastoral Educativa y Retiros</option>
                <option value="otro">Otras Consultas Generales</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Mensaje o Detalle de Solicitud *</label>
              <textarea
                required
                rows={5}
                placeholder="Escribe aquí tu consulta o solicitud detallada..."
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none leading-relaxed"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-400">
                Tus datos son tratados bajo la política de privacidad de LICATEBA.
              </span>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta</span>
              </button>
            </div>
          </form>

          {/* Google Sites & Workspace Integration Accordion */}
          <div className="pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setShowTechGuide(!showTechGuide)}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-left"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <Code className="w-4 h-4" />
                <span>Guía Técnica: ¿Cómo se integra este sistema en Google Sites y Apps Script?</span>
              </div>
              <span className="text-xs text-slate-500 font-bold">
                {showTechGuide ? 'Ocultar' : 'Ver Guía de Despliegue'}
              </span>
            </button>

            {showTechGuide && (
              <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200 space-y-4 text-xs text-slate-700 leading-relaxed animate-in fade-in">
                <h4 className="font-bold text-slate-900 text-sm">
                  Arquitectura Oficial del Ecosistema LICATEBA:
                </h4>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1">
                    <span className="font-bold text-blue-900 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" /> 1. Google Sites (Frontend Principal e Iframe)
                    </span>
                    <p className="text-[11px] text-slate-600">
                      Google Sites aloja la estructura estática del portal institucional. Para las secciones dinámicas (Tablón de avisos, calendario interactivo, periódico digital y panel administrativo), se inserta el Web App mediante el menú: <em>Insertar → Insertar código / URL</em> con el enlace de Apps Script ejecutable.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <FileSpreadsheet className="w-3.5 h-3.5" /> 2. Google Sheets (Base de Datos Relacional)
                    </span>
                    <p className="text-[11px] text-slate-600">
                      Un libro de cálculo maestro con 7 pestañas: <code>Usuarios</code>, <code>Avisos</code>, <code>Actividades</code>, <code>Ediciones</code>, <code>Articulos</code>, <code>Propuestas</code> y <code>Auditoria</code>. Las filas representan registros con IDs únicos e integridad referencial.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
                    <span className="font-bold text-amber-900 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" /> 3. Google Apps Script (Backend y API REST)
                    </span>
                    <p className="text-[11px] text-slate-600">
                      El script <code>Code.gs</code> atiende peticiones <code>doGet(e)</code> para servir la aplicación y consultar datos (filtrados según el correo de <code>Session.getActiveUser().getEmail()</code>), y <code>doPost(e)</code> para procesar formularios con validación de roles y registro inmutable en la bitácora de auditoría.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200 space-y-1">
                    <span className="font-bold text-purple-900 flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5" /> 4. Google Drive (Almacenamiento de Evidencias y PDFs)
                    </span>
                    <p className="text-[11px] text-slate-600">
                      Estructura de carpetas compartidas con permisos restringidos donde se depositan circulares firmadas en PDF, fotos de actividades con compresión optimizada y borradores editoriales de Google Docs.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
