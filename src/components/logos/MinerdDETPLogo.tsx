import React from 'react';

interface MinerdDETPLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  height?: number | string;
}

export const MinerdDETPLogo: React.FC<MinerdDETPLogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'full',
  height
}) => {
  const isLight = variant === 'light';
  const navyColor = isLight ? '#FFFFFF' : '#002D62';
  const redColor = '#CE1126';
  const grayColor = isLight ? '#94A3B8' : '#64748B';
  const dividerColor = isLight ? 'rgba(255,255,255,0.25)' : '#CBD5E1';

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`} style={height ? { height } : undefined}>
        {/* Compact version with dome and DETP */}
        <svg 
          viewBox="0 0 40 40" 
          className="h-full w-auto shrink-0" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dome */}
          <path d="M20 3 L20 6" stroke={navyColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 6 L21 6" stroke={navyColor} strokeWidth="1.5" />
          <path d="M13 14 C13 9 16 6 20 6 C24 6 27 9 27 14 Z" fill={navyColor} />
          {/* Columns */}
          <rect x="12" y="15" width="16" height="3" rx="0.5" fill={navyColor} />
          <rect x="13" y="19" width="14" height="2" fill={navyColor} />
          <line x1="11" y1="23" x2="29" y2="23" stroke={redColor} strokeWidth="2" />
          {/* DETP wave */}
          <path d="M12 28 C16 26 22 26 28 30" stroke={navyColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M14 32 C18 30 24 30 28 34" stroke={redColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className={`text-[11px] font-black tracking-tight ${isLight ? 'text-white' : 'text-blue-950'}`}>
            MINERD • DETP
          </span>
          <span className={`text-[9px] font-medium tracking-wide ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>
            Educación Técnico Profesional
          </span>
        </div>
      </div>
    );
  }

  // Full official logo matching "Logo Minerd y Tecnico Profesional.png"
  return (
    <svg 
      viewBox="0 0 540 120" 
      className={className} 
      style={height ? { height } : undefined}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Ministerio de Educación (MINERD) y Dirección de Educación Técnico Profesional (DETP) República Dominicana"
    >
      {/* ========================================================
          LEFT SIDE: GOBIERNO DE LA REPÚBLICA DOMINICANA - EDUCACIÓN
          ======================================================== */}
      <g id="minerd-side">
        {/* National Palace Dome */}
        <g transform="translate(100, 3) scale(0.95)">
          {/* Cross & Spire */}
          <line x1="10" y1="0" x2="10" y2="4" stroke={navyColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="2" x2="12" y2="2" stroke={navyColor} strokeWidth="1.5" />
          
          {/* Cupola Cap */}
          <ellipse cx="10" cy="5" rx="3.5" ry="1.5" fill={navyColor} />
          
          {/* Main Dome Arch */}
          <path 
            d="M-18 36 C-18 16 -7 6 10 6 C27 6 38 16 38 36 Z" 
            fill={navyColor} 
          />
          
          {/* Dome ribs (white vertical incisions) */}
          <path d="M-10 36 C-10 20 -4 10 10 7" stroke={isLight ? '#0B1528' : '#FFFFFF'} strokeWidth="1.2" fill="none" opacity="0.9" />
          <path d="M-2 36 C-2 22 2 12 10 7" stroke={isLight ? '#0B1528' : '#FFFFFF'} strokeWidth="1.2" fill="none" opacity="0.9" />
          <path d="M10 7 L10 36" stroke={isLight ? '#0B1528' : '#FFFFFF'} strokeWidth="1.2" opacity="0.9" />
          <path d="M22 36 C22 22 18 12 10 7" stroke={isLight ? '#0B1528' : '#FFFFFF'} strokeWidth="1.2" fill="none" opacity="0.9" />
          <path d="M30 36 C30 20 24 10 10 7" stroke={isLight ? '#0B1528' : '#FFFFFF'} strokeWidth="1.2" fill="none" opacity="0.9" />

          {/* Dome Base Gallery / Columns */}
          <rect x="-21" y="36" width="62" height="2.5" fill={navyColor} />
          {/* Miniature colonnade */}
          {[-18, -11, -4, 3, 10, 17, 24, 31, 38].map((cx, i) => (
            <rect key={i} x={cx} y="39.5" width="2" height="4.5" fill={navyColor} />
          ))}
          <rect x="-23" y="44" width="66" height="3" fill={navyColor} />
        </g>

        {/* Text: GOBIERNO DE LA */}
        <text 
          x="110" 
          y="62" 
          textAnchor="middle" 
          fill={navyColor} 
          fontSize="11" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" 
          fontWeight="500" 
          letterSpacing="2.5"
        >
          GOBIERNO DE LA
        </text>

        {/* Text: REPÚBLICA DOMINICANA */}
        <text 
          x="110" 
          y="76" 
          textAnchor="middle" 
          fill={navyColor} 
          fontSize="11.5" 
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" 
          fontWeight="700" 
          letterSpacing="2.8"
        >
          REPÚBLICA DOMINICANA
        </text>

        {/* Red accent line */}
        <rect x="42" y="84" width="136" height="3" rx="1" fill={redColor} />

        {/* Text: EDUCACIÓN */}
        <text 
          x="110" 
          y="105" 
          textAnchor="middle" 
          fill={redColor} 
          fontSize="18" 
          fontFamily="Georgia, 'Times New Roman', serif" 
          fontWeight="700" 
          letterSpacing="4"
        >
          EDUCACIÓN
        </text>
      </g>

      {/* ========================================================
          VERTICAL SEPARATOR LINE
          ======================================================== */}
      <line 
        x1="225" 
        y1="10" 
        x2="225" 
        y2="110" 
        stroke={dividerColor} 
        strokeWidth="1.2" 
      />

      {/* ========================================================
          RIGHT SIDE: DETP (DIRECCIÓN DE EDUCACIÓN TÉCNICO PROFESIONAL)
          ======================================================== */}
      <g id="detp-side" transform="translate(250, 0)">
        
        {/* Dynamic Dual Wave Swooshes (Dominican Flag Motif) */}
        <g transform="translate(10, 14)">
          {/* Upper Swoosh (Navy Blue) */}
          <path 
            d="M5 24 C 18 10, 42 12, 54 28 C 42 22, 22 20, 5 24 Z" 
            fill={navyColor} 
          />
          {/* Lower Swoosh (Dominican Red) */}
          <path 
            d="M7 40 C 22 28, 48 24, 60 44 C 46 36, 24 35, 7 40 Z" 
            fill={redColor} 
          />
        </g>

        {/* Large "DETP" Acronym */}
        <g transform="translate(85, 52)">
          {/* "D" in Silver / Slate Gray */}
          <text 
            x="0" 
            y="0" 
            fill={grayColor} 
            fontSize="54" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="300" 
            letterSpacing="-1"
          >
            D
          </text>
          {/* "ETP" in Solid Deep Navy */}
          <text 
            x="48" 
            y="0" 
            fill={navyColor} 
            fontSize="54" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="700" 
            letterSpacing="-1"
          >
            ETP
          </text>
        </g>

        {/* Full Title Subheading */}
        <text 
          x="90" 
          y="68" 
          fill={navyColor} 
          fontSize="11" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="600" 
          letterSpacing="1.2"
        >
          DIRECCIÓN DE
        </text>

        <text 
          x="90" 
          y="81" 
          fill={navyColor} 
          fontSize="11.5" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          letterSpacing="1.1"
        >
          EDUCACIÓN TÉCNICO
        </text>

        <text 
          x="90" 
          y="94" 
          fill={navyColor} 
          fontSize="11.5" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          letterSpacing="1.1"
        >
          PROFESIONAL
        </text>

        <text 
          x="90" 
          y="107" 
          fill={navyColor} 
          fontSize="9.5" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="600" 
          letterSpacing="2.8"
        >
          REPÚBLICA DOMINICANA
        </text>

      </g>
    </svg>
  );
};
