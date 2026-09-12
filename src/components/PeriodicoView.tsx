import React, { useState } from 'react';
import { ArticuloPeriodico, EdicionPeriodico, ActiveView } from '../types';
import { LicatebaLogo } from './logos/LicatebaLogo';
import { MinerdDETPLogo } from './logos/MinerdDETPLogo';
import { 
  Newspaper, 
  Search, 
  Sparkles, 
  Eye, 
  Calendar, 
  BookOpen, 
  ChevronRight, 
  PenTool, 
  Share2, 
  Printer, 
  X, 
  Sun, 
  Tag, 
  ArrowRight,
  BookMarked
} from 'lucide-react';

interface PeriodicoViewProps {
  articulos: ArticuloPeriodico[];
  ediciones: EdicionPeriodico[];
  edicionActiva: EdicionPeriodico;
  onSelectEdicion: (edicion: EdicionPeriodico) => void;
  selectedArticulo: ArticuloPeriodico | null;
  setSelectedArticulo: (art: ArticuloPeriodico | null) => void;
  setActiveView: (view: ActiveView) => void;
}

export const PeriodicoView: React.FC<PeriodicoViewProps> = ({
  articulos,
  ediciones,
  edicionActiva,
  onSelectEdicion,
  selectedArticulo,
  setSelectedArticulo,
  setActiveView
}) => {
  const [selectedCategoria, setSelectedCategoria] = useState<string>('todas');
  const [searchTerm, setSearchTerm] = useState('');

  // Categories list
  const categorias = [
    { id: 'todas', label: 'Todas las Secciones' },
    { id: 'tecnologia', label: 'Tecnología & Robótica' },
    { id: 'ciencia', label: 'Ciencia' },
    { id: 'cultura', label: 'Cultura & Arte' },
    { id: 'deportes', label: 'Deportes' },
    { id: 'literatura', label: 'Literatura & Poesía' },
    { id: 'entrevistas', label: 'Entrevistas' },
    { id: 'opinion', label: 'Opinión Estudiantil' },
    { id: 'vida_estudiantil', label: 'Vida Escolar' },
    { id: 'proyectos', label: 'Proyectos Técnicos' },
    { id: 'medio_ambiente', label: 'Medio Ambiente & Enriquillo' }
  ];

  // Filter articles by edition, category, and search
  const articulosFiltrados = articulos.filter(art => {
    const matchesEdicion = art.edicionId === edicionActiva.id;
    const matchesCategoria = selectedCategoria === 'todas' || art.categoria === selectedCategoria;
    const matchesSearch = 
      art.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.contenido.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesEdicion && matchesCategoria && matchesSearch;
  });

  // Lead article
  const leadArticle = articulosFiltrados.find(a => a.destacadoEnPortada) || articulosFiltrados[0];
  const otherArticles = articulosFiltrados.filter(a => a.id !== leadArticle?.id);

  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. MASTHEAD PERIODÍSTICO OFICIAL */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm text-center space-y-4">
        
        {/* Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Barahona, República Dominicana</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-600 font-medium">
              <Sun className="w-3.5 h-3.5" /> 31°C Caribeño Soleado
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-serif-title italic text-slate-600">
              "Sapientia, Fides et Ars Technica"
            </span>
            <span>•</span>
            <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-bold">
              {edicionActiva.numero}
            </span>
          </div>
        </div>

        {/* Big Newspaper Brand Title with Flanking Logos */}
        <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Flank: Licateba Coat of Arms */}
          <div className="hidden md:flex flex-col items-center shrink-0 w-28 text-center">
            <LicatebaLogo className="h-20 w-auto drop-shadow-xs" variant="full" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight mt-1">
              Escudo Oficial
            </span>
          </div>

          {/* Central Masthead Headlines */}
          <div className="space-y-1 text-center flex-1">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase font-cinzel">
              Órgano de Comunicación Escolar, Científica y Pastoral
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 font-serif-title uppercase">
              LICATEBA INFORMA
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 italic max-w-xl mx-auto font-serif-title">
              Voces, proyectos de innovación y reflexiones del Liceo Católico Tecnológico de Barahona
            </p>
          </div>

          {/* Right Flank: MINERD & DETP Logo */}
          <div className="hidden md:flex flex-col items-center shrink-0 w-28 text-center">
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
              <MinerdDETPLogo className="h-10 w-auto" variant="compact" />
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight mt-1">
              Aval MINERD/DETP
            </span>
          </div>
        </div>

        {/* Edition Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
              Consultar Edición:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {ediciones.map(ed => (
                <button
                  key={ed.id}
                  type="button"
                  onClick={() => onSelectEdicion(ed)}
                  className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${
                    edicionActiva.id === ed.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {ed.numero} ({ed.fechaPublicacion})
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveView('proponer')}
            className="flex items-center gap-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl transition-colors shadow-2xs"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Proponer Artículo para la Próxima Edición</span>
          </button>
        </div>

      </div>

      {/* Editorial Note Callout */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-xs sm:text-sm text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="font-bold text-amber-800 uppercase tracking-wide text-[11px] block">
            Nota Editorial • {edicionActiva.numero}
          </span>
          <p className="font-serif-title italic text-slate-800">
            "{edicionActiva.editorial}"
          </p>
          <p className="text-[11px] text-slate-500">
            Consejo Editorial: {edicionActiva.editorJefe}
          </p>
        </div>
      </div>

      {/* 2. Categorías / Sections Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
        {categorias.map(cat => {
          const isSelected = selectedCategoria === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategoria(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 3. ARTÍCULO PRINCIPAL DE PORTADA (LEAD STORY) */}
      {leadArticle && (
        <div 
          onClick={() => setSelectedArticulo(leadArticle)}
          className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all cursor-pointer group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-7 relative aspect-16/10 overflow-hidden bg-slate-900">
              <img 
                src={leadArticle.imagenDestacada} 
                alt={leadArticle.titulo} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-lg">
                  Gran Portada
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-bold text-blue-700 uppercase tracking-wider">
                    {leadArticle.categoria.replace('_', ' ')}
                  </span>
                  <span>•</span>
                  <span>{leadArticle.fecha}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-900 transition-colors font-serif-title leading-tight">
                  {leadArticle.titulo}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-4">
                  {leadArticle.subtitulo}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">{leadArticle.autor}</p>
                  <p className="text-slate-500">{leadArticle.cursoOSeccion || leadArticle.autorRol}</p>
                </div>
                <span className="text-blue-800 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Leer Crónica <ArrowRight className="w-4 h-4" />
                </span>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 4. MÁS ARTÍCULOS DE LA EDICIÓN */}
      {otherArticles.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xl font-bold text-slate-900 font-serif-title">
              Secciones y Reportajes de {edicionActiva.numero}
            </h3>
            <span className="text-xs text-slate-500">
              {otherArticles.length} artículos en esta vista
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map(art => (
              <div
                key={art.id}
                onClick={() => setSelectedArticulo(art)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img 
                      src={art.imagenDestacada} 
                      alt={art.titulo} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                        {art.categoria.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>{art.fecha}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {art.visitas}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-serif-title leading-snug line-clamp-2">
                      {art.titulo}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {art.subtitulo}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium truncate max-w-[170px]">
                    {art.autor}
                  </span>
                  <span className="text-blue-800 font-semibold flex items-center gap-1">
                    Leer <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. MODAL LECTOR COMPLETO DEL ARTÍCULO */}
      {selectedArticulo && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            {/* Action Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-md">
                  {selectedArticulo.categoria.replace('_', ' ')}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 font-serif-title italic">
                  LICATEBA Informa • {edicionActiva.numero}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticulo(null)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-serif-title leading-tight">
                {selectedArticulo.titulo}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-serif-title italic leading-relaxed">
                {selectedArticulo.subtitulo}
              </p>

              {/* Author & meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 border-y border-slate-100 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{selectedArticulo.autor}</span>
                  <span>({selectedArticulo.cursoOSeccion || selectedArticulo.autorRol})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{selectedArticulo.fecha}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-slate-400" /> {selectedArticulo.visitas} lecturas
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-900">
              <img 
                src={selectedArticulo.imagenDestacada} 
                alt={selectedArticulo.titulo} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
              {selectedArticulo.contenido}
            </div>

            {/* Tags */}
            {selectedArticulo.tags && selectedArticulo.tags.length > 0 && (
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                {selectedArticulo.tags.map(t => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Footer & Close */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Liceo Católico Tecnológico de Barahona • LICATEBA
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticulo(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl"
              >
                Cerrar Artículo
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
