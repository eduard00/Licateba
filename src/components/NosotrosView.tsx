import React, { useState } from 'react';
import { INSTITUCION_INFO, AREAS_TECNICAS } from '../data/initialData';
import { LicatebaLogo } from './logos/LicatebaLogo';
import { MinerdDETPLogo } from './logos/MinerdDETPLogo';
import { 
  BookOpen, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Briefcase, 
  GraduationCap,
  Users,
  Building2,
  Layers
} from 'lucide-react';

export const NosotrosView: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState(AREAS_TECNICAS[0]);

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header institucional */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 font-cinzel">
          Identidad, Fe y Vocación de Servicio
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-title">
          Nosotros: Liceo Católico Tecnológico de Barahona
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Desde Barahona para toda la Región Enriquillo, forjamos bachilleres técnicos con alta competencia tecnológica, sólidos principios morales y vocación de transformación social.
        </p>
      </div>

      {/* 2. Misión, Visión y Valores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Misión */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-serif-title">
            Nuestra Misión
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Formar integralmente a adolescentes y jóvenes de la provincia de Barahona en las dimensiones espiritual, humana, científica y técnico-profesional, capacitándolos para insertarse con éxito en el sector productivo o continuar estudios superiores con un firme compromiso ético y cristiano.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-serif-title">
            Nuestra Visión
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ser la institución técnico-profesional de referencia en la región Suroeste y la República Dominicana, reconocida por la excelencia académica, la vanguardia tecnológica y la formación de líderes íntegros capaces de impulsar el desarrollo socioeconómico sostenible.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-serif-title">
            Valores Institucionales
          </h2>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Fe y Espiritualidad:</strong> Centralidad en Dios y en el Evangelio.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Excelencia & Disciplina:</strong> Calidad en el estudio y el trabajo.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Innovación Tecnológica:</strong> Creatividad con sentido social.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Solidaridad y Comunidad:</strong> Amor al prójimo y a la patria.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 3. Reseña Histórica & Filosofía */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fundado en 1998 • Diócesis de Barahona</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif-title leading-tight">
              Una Historia de Compromiso con la Juventud Barahonera
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                El <strong>Liceo Católico Tecnológico de Barahona (LICATEBA)</strong> nació ante la imperiosa necesidad de brindar a los jóvenes de los sectores populares de Barahona y comunidades aledañas una educación secundaria técnica con estándares de alta calidad, que les permitiera romper el ciclo de la pobreza y encontrar trabajo digno.
              </p>
              <p>
                Bajo la iniciativa de la Diócesis de Barahona, en alianza con el Ministerio de Educación de la República Dominicana (MINERD), el centro abrió sus puertas con dos especialidades fundacionales. Con el paso de los años y el empuje de la revolución digital, incorporó modernos laboratorios de software, robótica, redes y talleres de automatización industrial.
              </p>
              <p>
                Hoy en día, más de 2,500 egresados de LICATEBA se desempeñan como ingenieros, directores de tecnología, gerentes contables, educadores y sacerdotes que dan testimonio de una formación en valores.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-cinzel">
                Filosofía Educativa
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                "Educar la mente sin educar el corazón no es educar en absoluto". Inspirados en el sistema preventivo y en el humanismo cristiano, en LICATEBA el estudiante es el protagonista de su aprendizaje a través del método de proyectos, la resolución de problemas reales y el compromiso comunitario.
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-[11px] text-amber-200/90 font-serif-title italic">
                  — Ideario Institucional LICATEBA
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="text-2xl font-black text-amber-400 font-cinzel">28</span>
                <p className="text-[11px] text-slate-300">Años de trayectoria</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="text-2xl font-black text-blue-400 font-cinzel">+2,500</span>
                <p className="text-[11px] text-slate-300">Egresados en el mercado</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Perfil del Egresado */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
            Sello Formativo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-title">
            Perfil del Egresado de LICATEBA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Al culminar sus tres años en el segundo ciclo técnico profesional, el estudiante de LICATEBA evidencia las siguientes dimensiones:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2.5">
            <Cpu className="w-6 h-6 text-blue-700" />
            <h4 className="font-bold text-slate-900 text-sm">Competencia Técnica Rigurosa</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Domina las normativas técnicas nacionales e internacionales en su especialidad, manejando herramientas de software y hardware de nivel industrial.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2.5">
            <ShieldCheck className="w-6 h-6 text-emerald-700" />
            <h4 className="font-bold text-slate-900 text-sm">Integridad y Ética Profesional</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Actúa con honestidad comprobada en el manejo de información sensible, fondos, equipos y trato con usuarios y clientes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2.5">
            <Briefcase className="w-6 h-6 text-amber-700" />
            <h4 className="font-bold text-slate-900 text-sm">Capacidad de Emprendimiento</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capaz de diseñar planes de negocio y formular soluciones innovadoras para problemáticas de la comunidad de Barahona.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2.5">
            <Users className="w-6 h-6 text-indigo-700" />
            <h4 className="font-bold text-slate-900 text-sm">Liderazgo y Trabajo en Equipo</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comunica con asertividad, sabe colaborar en entornos multidisciplinarios y practica la empatía y la solidaridad.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Símbolos Institucionales y Aval Oficial (Escudo LICATEBA + Logo MINERD/DETP) */}
      <div className="space-y-10 pt-6 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 font-cinzel">
            Heráldica, Identidad y Acreditación Estatal
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-title">
            Símbolos Oficiales del Centro y Respaldo Gubernamental
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Nuestro escudo heráldico condensa la historia, la geografía y la espiritualidad de Barahona, en armonía con la acreditación formal del Ministerio de Educación de la República Dominicana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta Escudo de LICATEBA */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800">
                    Símbolo de Fe y Sabiduría
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-serif-title mt-0.5">
                    Escudo Oficial de LICATEBA
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold">
                  Fundación 1998
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                {/* Visual Emblem */}
                <div className="shrink-0 p-3 bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl border border-slate-200/80 shadow-md">
                  <LicatebaLogo className="h-44 w-auto" variant="full" />
                </div>

                {/* Heraldic Description */}
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    El escudo del <strong>Liceo Católico Tecnológico de Barahona</strong> representa la síntesis entre la fe cristiana, el rigor científico-tecnológico y el arraigo en la tierra barahonera:
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">☩</span>
                      <span><strong>Cruz Latina Blanca:</strong> Eje central de salvación y servicio pastoral evangélico.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">📖</span>
                      <span><strong>Sagrada Escritura (Jn 8:32):</strong> <em>"La verdad os hará libres"</em>, guía moral de nuestros estudiantes.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">☀️</span>
                      <span><strong>Sol Naciente Radiante:</strong> La luz del entendimiento y el porvenir brillante del Sur dominicano.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">☕</span>
                      <span><strong>Rama de Café (Izquierda):</strong> Fruto de la Sierra de Bahoruco y Polo, emblema de perseverancia y trabajo digno.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-emerald-700 font-bold">🎋</span>
                      <span><strong>Caña de Azúcar (Derecha):</strong> La tradición agroindustrial del Ingenio Barahona y el valle fértil del Yaque del Sur.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 font-serif-title italic text-center">
              Lema institucional: "Sapientia, Fides et Ars Technica" — Sabiduría, Fe y Arte Técnico
            </div>
          </div>

          {/* Tarjeta Logo MINERD & DETP */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Acreditación Ministerial Oficial
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif-title mt-0.5">
                    MINERD y Dirección de Educación Técnico Profesional
                  </h3>
                </div>
              </div>

              {/* Logo Presentation in High Clarity White Container */}
              <div className="bg-white rounded-2xl p-5 shadow-lg mb-6 flex items-center justify-center">
                <MinerdDETPLogo className="h-16 sm:h-20 w-auto" variant="full" />
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  LICATEBA opera con acreditación plena del <strong>Ministerio de Educación de la República Dominicana (MINERD)</strong> y está adscrito a la <strong>Dirección de Educación Técnico Profesional (DETP)</strong> bajo el código de centro escolar oficial.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Distrito Educativo 01-03:</strong> Jurisdicción de Barahona, Regional 01.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Título Oficial Homologado:</strong> Bachiller Técnico con validez para empleo y estudios universitarios.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Pasantía Formativa:</strong> 360 horas de formación en centros de trabajo reguladas por el DETP.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-900/40 rounded-xl border border-blue-700/50 text-[11px] text-blue-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Garantía de calidad curricular supervisada por inspectores y técnicos del MINERD.</span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Áreas Técnicas en Detalle (Selector Interactivo) */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
            Oferta Curricular
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-title">
            Modalidad Técnico Profesional
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Explora las 4 especialidades oficiales acreditadas por el Ministerio de Educación (MINERD):
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {AREAS_TECNICAS.map(area => {
            const isSelected = selectedArea.id === area.id;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{area.sigla}: {area.nombre}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Area Detail Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
                Especialidad Técnica • {selectedArea.sigla}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-serif-title mt-1">
                {selectedArea.nombre}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Duración: {selectedArea.duracion}
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold shrink-0">
              Certificación Oficial MINERD / INFOTEP
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {selectedArea.descripcion}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Competencias Clave</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                {selectedArea.competencias.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>Salidas Laborales</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                {selectedArea.salidasLaborales.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span>Talleres & Laboratorios</span>
              </h4>
              <div className="space-y-2">
                {selectedArea.talleres.map((t, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-800">
                    {t}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
