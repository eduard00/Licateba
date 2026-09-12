import React, { useState } from 'react';
import { 
  ActiveView, 
  UserRole, 
  Aviso 
} from '../types';
import { 
  GraduationCap, 
  Newspaper, 
  Calendar, 
  Bell, 
  ShieldCheck, 
  PenTool, 
  Code, 
  Menu, 
  X, 
  AlertTriangle, 
  ChevronDown,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { INSTITUCION_INFO } from '../data/initialData';
import { LicatebaLogo } from './logos/LicatebaLogo';
import { MinerdDETPLogo } from './logos/MinerdDETPLogo';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  avisos: Aviso[];
  pendingCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  currentRole,
  setCurrentRole,
  avisos,
  pendingCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  // Find urgent notice for top ticker
  const urgentAviso = avisos.find(a => a.prioridad === 'urgente' && a.estado === 'publicado');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: GraduationCap },
    { id: 'nosotros', label: 'Nosotros', icon: BookOpen },
    { id: 'actividades', label: 'Actividades', icon: Calendar },
    { id: 'avisos', label: 'Avisos', icon: Bell },
    { id: 'periodico', label: 'Periódico Escolar', icon: Newspaper, highlight: true },
    { id: 'proponer', label: 'Proponer Artículo', icon: PenTool },
    { 
      id: 'admin', 
      label: 'Administración', 
      icon: ShieldCheck, 
      badge: pendingCount > 0 ? pendingCount : undefined 
    },
    { id: 'arquitectura', label: 'Arquitectura & Workspace', icon: Code }
  ];

  const rolesList: { role: UserRole; label: string; desc: string; badgeColor: string }[] = [
    { role: 'superadmin', label: 'Superadministrador', desc: 'Control total del sistema y usuarios', badgeColor: 'bg-purple-700 text-white' },
    { role: 'admin', label: 'Administrador', desc: 'Gestión de avisos, actividades y noticias', badgeColor: 'bg-blue-700 text-white' },
    { role: 'editor', label: 'Editor Periódico', desc: 'Aprobación de contenidos y publicaciones', badgeColor: 'bg-amber-600 text-white' },
    { role: 'docente', label: 'Docente / Asesor', desc: 'Revisión y propuestas de alumnos', badgeColor: 'bg-emerald-700 text-white' },
    { role: 'estudiante', label: 'Estudiante', desc: 'Envío de propuestas y consulta escolar', badgeColor: 'bg-cyan-700 text-white' },
    { role: 'visitante', label: 'Visitante / Público', desc: 'Navegación general pública', badgeColor: 'bg-slate-600 text-white' }
  ];

  const currentRoleObj = rolesList.find(r => r.role === currentRole) || rolesList[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Urgent notice ribbon */}
      {urgentAviso && (
        <div 
          onClick={() => setActiveView('avisos')}
          className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white px-4 py-1.5 text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer hover:opacity-95 transition-opacity"
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 truncate">
              <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0">
                <AlertTriangle className="w-3 h-3" /> URGENTE
              </span>
              <span className="truncate">{urgentAviso.titulo}</span>
            </div>
            <span className="underline text-xs shrink-0 flex items-center gap-1">
              Ver detalles <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}

      {/* Main institutional top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & School Identity */}
          <div 
            onClick={() => setActiveView('inicio')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            {/* Official Licateba Heraldic Crest */}
            <div className="relative group-hover:scale-105 transition-transform shrink-0">
              <LicatebaLogo className="h-14 sm:h-16 w-auto" variant="full" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-blue-900 transition-colors">
                  LICATEBA
                </span>
                <span className="hidden md:inline-flex text-[11px] bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-md font-semibold">
                  Técnico Profesional
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Liceo Católico Tecnológico de Barahona • Rep. Dominicana
              </p>
            </div>
          </div>

          {/* MINERD & DETP Institutional Accreditation Logo */}
          <div 
            onClick={() => setActiveView('nosotros')}
            className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer group/minerd shrink-0"
            title="Acreditado por el Ministerio de Educación (MINERD) y la Dirección de Educación Técnico Profesional (DETP)"
          >
            <MinerdDETPLogo className="h-9 lg:h-10 w-auto" variant="full" />
            <div className="border-l border-slate-300 pl-2 text-left leading-tight hidden xl:block">
              <span className="block text-[10px] font-black text-blue-950 uppercase tracking-tight">
                Distrito 01-03
              </span>
              <span className="text-[9px] text-slate-500 font-medium">
                Barahona
              </span>
            </div>
          </div>

          {/* Role selector dropdown & Action badges */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Role Simulator */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                title="Cambiar rol para simular permisos"
              >
                <span className="text-slate-400 text-[11px]">Rol activo:</span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${currentRoleObj.badgeColor}`}>
                  {currentRoleObj.label}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">Simulador de Roles Institucionales</p>
                    <p className="text-[11px] text-slate-500">Prueba la plataforma con diferentes niveles de acceso</p>
                  </div>
                  <div className="py-1">
                    {rolesList.map(item => (
                      <button
                        key={item.role}
                        type="button"
                        onClick={() => {
                          setCurrentRole(item.role);
                          setRoleDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                          currentRole === item.role ? 'bg-blue-50/70 font-semibold text-blue-900' : 'text-slate-700'
                        }`}
                      >
                        <div>
                          <span className="block">{item.label}</span>
                          <span className="text-[10px] text-slate-400 font-normal">{item.desc}</span>
                        </div>
                        {currentRole === item.role && (
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick "Proponer Artículo" Button */}
            <button
              type="button"
              onClick={() => setActiveView('proponer')}
              className="flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-3.5 py-2 rounded-lg shadow-xs hover:shadow transition-all"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Proponer Artículo</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className={`px-2.5 py-1 text-[11px] rounded-md font-bold ${currentRoleObj.badgeColor}`}
            >
              {currentRoleObj.label}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Navigation bar desktop */}
        <nav className="hidden lg:flex items-center gap-1 pb-2 overflow-x-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveView(item.id as ActiveView)}
                className={`relative flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-xs font-semibold'
                    : item.highlight
                    ? 'text-amber-700 hover:bg-amber-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : ''}`} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.highlight && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in fade-in duration-150">
          
          {/* Mobile Institutional Dual Logo Banner */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <LicatebaLogo className="h-10 w-auto" variant="full" />
              <div>
                <span className="block text-xs font-extrabold text-slate-900">LICATEBA</span>
                <span className="text-[10px] text-slate-500">Distrito 01-03</span>
              </div>
            </div>
            <div className="border-l border-slate-200 pl-3">
              <MinerdDETPLogo className="h-8 w-auto" variant="full" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveView(item.id as ActiveView);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg text-left ${
                    isActive
                      ? 'bg-blue-900 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Role switcher inside mobile drawer */}
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Cambiar Rol de Usuario
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {rolesList.map(r => (
                <button
                  key={r.role}
                  type="button"
                  onClick={() => {
                    setCurrentRole(r.role);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs p-2 rounded-lg text-left border ${
                    currentRole === r.role
                      ? 'border-blue-700 bg-blue-50 font-bold text-blue-950'
                      : 'border-slate-200 text-slate-700'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
