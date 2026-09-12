import React, { useState } from 'react';
import { GaleriaFoto } from '../types';
import { 
  Camera, 
  Search, 
  ExternalLink, 
  X, 
  Calendar, 
  Eye, 
  Share2, 
  Download, 
  CheckCircle2,
  FolderOpen
} from 'lucide-react';

interface GaleriaViewProps {
  fotos: GaleriaFoto[];
}

export const GaleriaView: React.FC<GaleriaViewProps> = ({ fotos }) => {
  const [selectedCategoria, setSelectedCategoria] = useState<string>('todas');
  const [selectedFoto, setSelectedFoto] = useState<GaleriaFoto | null>(null);

  const categorias = [
    { id: 'todas', label: 'Todas las Evidencias' },
    { id: 'feria_tecnologica', label: 'Ferias Tecnológicas' },
    { id: 'academica', label: 'Académicas & Talleres' },
    { id: 'pastoral', label: 'Pastoral & Eucarísticas' },
    { id: 'deportiva', label: 'Deportes' },
    { id: 'institucional', label: 'Institucional & Graduaciones' }
  ];

  const fotosFiltradas = fotos.filter(f => 
    selectedCategoria === 'todas' || f.categoria === selectedCategoria
  );

  return (
    <div className="space-y-8 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold">
          <Camera className="w-3.5 h-3.5" />
          <span>Archivo Fotográfico Institucional</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-title">
          Galería de Actividades y Evidencias
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Memorias fotográficas de la vida estudiantil, ferias científicas, eucaristías y prácticas en laboratorios de LICATEBA, respaldadas en Google Drive Institucional.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categorias.map(cat => {
          const isSelected = selectedCategoria === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategoria(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fotosFiltradas.map(foto => (
          <div
            key={foto.id}
            onClick={() => setSelectedFoto(foto)}
            className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-2xs hover:shadow-lg transition-all"
          >
            <img 
              src={foto.url} 
              alt={foto.titulo} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] uppercase font-bold text-amber-400">
                {foto.categoria.replace('_', ' ')}
              </span>
              <h4 className="font-bold text-xs leading-snug line-clamp-2">
                {foto.titulo}
              </h4>
              <p className="text-[10px] text-slate-300 mt-0.5">
                {foto.fecha}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedFoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-800">
            
            <div className="relative aspect-16/10 bg-slate-900">
              <img 
                src={selectedFoto.url} 
                alt={selectedFoto.titulo} 
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedFoto(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-white space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">
                    {selectedFoto.categoria.replace('_', ' ')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif-title mt-0.5">
                    {selectedFoto.titulo}
                  </h3>
                </div>
                <span className="text-xs text-slate-500 shrink-0">
                  {selectedFoto.fecha}
                </span>
              </div>

              {selectedFoto.descripcion && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedFoto.descripcion}
                </p>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
                  Almacenado en: Google Drive / LICATEBA / Medios 2026
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedFoto(null)}
                  className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
