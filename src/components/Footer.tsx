import React from 'react';
import { INSTITUCION_INFO } from '../data/initialData';
import { LicatebaLogo } from './logos/LicatebaLogo';
import { MinerdDETPLogo } from './logos/MinerdDETPLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  Calendar,
  Layers,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { ActiveView } from '../types';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identity & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="shrink-0 p-1 bg-slate-900 rounded-xl border border-slate-800">
                <LicatebaLogo className="h-12 w-auto" variant="full" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight font-cinzel">
                  LICATEBA
                </h3>
                <p className="text-xs text-amber-400 font-medium">Barahona, Rep. Dominicana</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {INSTITUCION_INFO.nombreCompleto} — Centro educativo católico técnico-profesional dedicado a la formación integral de líderes con excelencia científica, tecnológica y sólida moral cristiana.
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-slate-400 block font-semibold">
                Lema Institucional
              </span>
              <p className="text-xs font-serif-title italic text-amber-300/90 mt-1">
                {INSTITUCION_INFO.lemaLatino}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                "{INSTITUCION_INFO.lema}"
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Navegación Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => setActiveView('inicio')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Inicio & Portada</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('nosotros')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Historia, Misión y Áreas Técnicas</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('actividades')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Agenda y Actividades Escolares</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('avisos')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Avisos y Circulares Oficiales</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('periodico')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Periódico "LICATEBA Informa"</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Participation & Tech Architecture */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Comunidad & Herramientas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => setActiveView('proponer')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Proponer Artículo para el Periódico</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('admin')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Panel de Control Administrativo</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('arquitectura')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-cyan-300"
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Google Workspace & Apps Script Code</span>
                </button>
              </li>
              <li>
                <a 
                  href="https://workspace.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-slate-200 transition-colors flex items-center gap-1 text-slate-400"
                >
                  <span>Google Classroom & Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px]">
              <span className="text-amber-400 font-semibold block mb-0.5">Soporte Técnico Escolar:</span>
              <p className="text-slate-400">soporte@licateba.edu.do • Coordinación de Tecnología</p>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Ubicación y Contacto
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{INSTITUCION_INFO.direccion}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400">{INSTITUCION_INFO.telefono}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-400">{INSTITUCION_INFO.email}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a 
                href={INSTITUCION_INFO.redes.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={INSTITUCION_INFO.redes.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={INSTITUCION_INFO.redes.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Institutional Accreditation Strip */}
        <div className="py-6 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
              <LicatebaLogo className="h-10 w-auto" variant="full" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-white uppercase tracking-wider">
                Centro Educativo de Excelencia Técnica
              </span>
              <span className="text-[11px] text-slate-400">
                Código de Centro MINERD: 04018 • Distrito Educativo 01-03 Barahona
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-xs">
            <MinerdDETPLogo className="h-9 w-auto" variant="full" />
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-400">
            <span className="text-amber-400 font-semibold block">Modalidad Técnico Profesional</span>
            <span>Títulos Oficiales avalados por el Ministerio de Educación</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {INSTITUCION_INFO.nombreCompleto} (LICATEBA). Barahona, República Dominicana.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Diseñado con Google Sites & Apps Script</span>
            <span>•</span>
            <span>Diócesis de Barahona</span>
            <span>•</span>
            <span>MINERD Regional 01</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
