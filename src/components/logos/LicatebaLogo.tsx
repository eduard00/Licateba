import React from 'react';

interface LicatebaLogoProps {
  className?: string;
  variant?: 'full' | 'shield' | 'icon' | 'crest-image';
  size?: number | string;
}

export const LicatebaLogo: React.FC<LicatebaLogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'full',
  size
}) => {
  // If user prefers the rich pictorial crest image generated directly
  if (variant === 'crest-image') {
    return (
      <img
        src="/src/assets/images/licateba_crest_1789170276238.jpg"
        alt="Escudo Oficial de LICATEBA"
        className={`object-contain ${className}`}
        style={size ? { height: size, width: size } : undefined}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Pure SVG Emblem matching "Logo Licateba.png"
  // Features:
  // - Central Shield with green & gold borders
  // - Top inscription: "LICATEBA"
  // - Rising golden radiant sun with rays
  // - White Latin cross
  // - Open Bible resting over cross with red ribbon bookmark
  // - Lower-left green field, Lower-right royal blue field
  // - Bottom inscription: "LICEO CATOLICO TECNOLOGICO DE BARAHONA"
  // - Left: Coffee / olive branch with green leaves & red berries
  // - Right: Sugarcane stalk with arching leaves & segmented nodes

  return (
    <svg
      viewBox="0 0 240 260"
      className={className}
      style={size ? { height: size, width: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Escudo Oficial del Liceo Católico Tecnológico de Barahona (LICATEBA)"
    >
      <defs>
        {/* Sun gold gradient */}
        <radialGradient id="sunGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF275" />
          <stop offset="45%" stopColor="#F5B700" />
          <stop offset="100%" stopColor="#E09F00" />
        </radialGradient>

        {/* Shield lower-left green gradient */}
        <linearGradient id="shieldGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38A169" />
          <stop offset="100%" stopColor="#1E6538" />
        </linearGradient>

        {/* Shield lower-right blue gradient */}
        <linearGradient id="shieldBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2B6CB0" />
          <stop offset="100%" stopColor="#1A365D" />
        </linearGradient>

        {/* Shield border gradient */}
        <linearGradient id="borderGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4D2E" />
          <stop offset="100%" stopColor="#0E2818" />
        </linearGradient>

        {/* Text curve path for bottom inscription */}
        <path
          id="bottomShieldCurve"
          d="M 68 200 C 90 226, 150 226, 172 200"
        />

        {/* Drop shadow for shield */}
        <filter id="shieldShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* =========================================================
          1. LEFT FLANK: RAMA DE CAFÉ / OLIVO (Hojas y Frutos Rojos)
          ========================================================= */}
      {variant !== 'shield' && (
        <g id="left-branch" transform="translate(18, 12)">
          {/* Main stem */}
          <path
            d="M 50 225 Q 35 150 25 70 Q 20 40 15 15"
            stroke="#2D4A22"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaves along the twig */}
          <g fill="#2F855A" stroke="#1C4532" strokeWidth="0.8">
            {/* Top leaf */}
            <path d="M 15 15 C 8 5, 20 -2, 22 12 C 20 18, 16 16, 15 15 Z" fill="#38A169" />
            <path d="M 17 25 C 2 20, 5 35, 18 32 Z" />
            <path d="M 22 40 C 35 30, 42 45, 25 46 Z" />
            <path d="M 23 58 C 8 52, 10 70, 24 64 Z" />
            <path d="M 27 75 C 45 68, 48 85, 30 84 Z" />
            <path d="M 29 95 C 12 88, 15 106, 31 102 Z" />
            <path d="M 33 115 C 52 108, 55 125, 36 122 Z" />
            <path d="M 36 135 C 18 128, 22 148, 38 142 Z" />
            <path d="M 40 158 C 60 152, 62 170, 43 166 Z" />
            <path d="M 43 180 C 26 172, 30 192, 45 188 Z" />
            <path d="M 47 202 C 65 195, 68 212, 50 210 Z" />
          </g>
          {/* Red Coffee Berries (Café de Polo / Barahona) */}
          <g fill="#C53030" stroke="#742A2A" strokeWidth="0.8">
            <circle cx="21" cy="38" r="3.2" />
            <circle cx="25" cy="42" r="2.8" />
            <circle cx="27" cy="72" r="3.2" />
            <circle cx="24" cy="77" r="2.7" />
            <circle cx="33" cy="112" r="3.2" />
            <circle cx="30" cy="118" r="2.8" />
            <circle cx="39" cy="154" r="3.4" />
            <circle cx="43" cy="198" r="3.2" />
          </g>
        </g>
      )}

      {/* =========================================================
          2. RIGHT FLANK: TALLO DE CAÑA DE AZÚCAR (Ingenio Barahona)
          ========================================================= */}
      {variant !== 'shield' && (
        <g id="right-sugarcane" transform="translate(165, 10)">
          {/* Segmented Cane Stalk at Base */}
          <g fill="#8CB369" stroke="#385420" strokeWidth="1.2">
            {/* Segment 1 */}
            <path d="M 18 225 L 14 185 L 24 185 L 26 225 Z" />
            <ellipse cx="19" cy="185" rx="5" ry="1.5" fill="#588157" />
            {/* Segment 2 */}
            <path d="M 14 185 L 12 145 L 21 145 L 24 185 Z" />
            <ellipse cx="16.5" cy="145" rx="4.5" ry="1.5" fill="#588157" />
            {/* Segment 3 */}
            <path d="M 12 145 L 10 105 L 18 105 L 21 145 Z" />
            <ellipse cx="14" cy="105" rx="4" ry="1.5" fill="#588157" />
            {/* Segment 4 upper shoot */}
            <path d="M 10 105 L 12 60 L 17 60 L 18 105 Z" />
          </g>
          {/* Long green arching cane leaves */}
          <g fill="#439A46" stroke="#1E5624" strokeWidth="0.8">
            {/* Leaf shooting straight/up */}
            <path d="M 14 65 C 10 30, 24 10, 20 0 C 12 15, 6 45, 12 65 Z" fill="#57A75A" />
            {/* Leaf arching to right */}
            <path d="M 16 75 C 30 50, 55 55, 62 70 C 50 62, 32 65, 15 80 Z" />
            {/* Leaf arching right/down */}
            <path d="M 18 115 C 36 90, 60 100, 64 125 C 50 110, 32 110, 16 122 Z" />
            {/* Leaf arching left toward shield */}
            <path d="M 10 90 C -5 70, -18 80, -22 95 C -12 85, 2 85, 10 98 Z" />
            <path d="M 11 130 C -2 110, -12 120, -16 135 C -8 124, 4 124, 11 138 Z" />
          </g>
        </g>
      )}

      {/* =========================================================
          3. CENTRAL SHIELD (ESCUDO HERALDICO CENTRAL)
          ========================================================= */}
      <g id="shield" filter="url(#shieldShadow)">
        
        {/* Outer Shield Outline (Dark Green / Golden Rim) */}
        <path
          d="M 60 30 
             L 180 30 
             C 185 30, 188 34, 188 40 
             L 188 140 
             C 188 185, 155 215, 120 230 
             C 85 215, 52 185, 52 140 
             L 52 40 
             C 52 34, 55 30, 60 30 Z"
          fill="#1C4D2E"
          stroke="#D4AF37"
          strokeWidth="3.5"
        />

        {/* Inner Shield Border (Yellow/Gold Border Ribbon) */}
        <path
          d="M 64 36 
             L 176 36 
             C 180 36, 182 39, 182 44 
             L 182 138 
             C 182 178, 152 206, 120 220 
             C 88 206, 58 178, 58 138 
             L 58 44 
             C 58 39, 60 36, 64 36 Z"
          fill="#0D2818"
        />

        {/* Shield Internal Field Canvas */}
        <g clipPath="url(#shieldInnerClip)">
          <clipPath id="shieldInnerClip">
            <path
              d="M 67 48 
                 L 173 48 
                 C 176 48, 178 50, 178 54 
                 L 178 136 
                 C 178 172, 150 198, 120 212 
                 C 90 198, 62 172, 62 136 
                 L 62 54 
                 C 62 50, 64 48, 67 48 Z"
            />
          </clipPath>

          {/* Upper Half: Sky Blue Background with Radiant Rising Sun */}
          <rect x="60" y="45" width="120" height="65" fill="#4A90E2" />

          {/* Radiant Golden Sun at Top */}
          <g id="rising-sun">
            {/* Sun Rays radiating outwards */}
            <g stroke="#F5B700" strokeWidth="2.5" strokeLinecap="round">
              {/* Ray beams */}
              <line x1="120" y1="95" x2="80" y2="60" />
              <line x1="120" y1="95" x2="90" y2="52" />
              <line x1="120" y1="95" x2="104" y2="48" />
              <line x1="120" y1="95" x2="120" y2="46" />
              <line x1="120" y1="95" x2="136" y2="48" />
              <line x1="120" y1="95" x2="150" y2="52" />
              <line x1="120" y1="95" x2="160" y2="60" />
            </g>

            {/* Sun Core Disc */}
            <circle cx="120" cy="85" r="24" fill="url(#sunGold)" stroke="#FFF275" strokeWidth="1.5" />
          </g>

          {/* Lower Half Division: Left (Green) and Right (Blue) */}
          <rect x="60" y="110" width="60" height="110" fill="url(#shieldGreen)" />
          <rect x="120" y="110" width="60" height="110" fill="url(#shieldBlue)" />

          {/* =====================================================
              CENTRAL LATIN CROSS (CRUZ CRISTIANA EN BLANCO)
              ===================================================== */}
          <g id="holy-cross">
            {/* Vertical cross beam */}
            <rect 
              x="112" 
              y="55" 
              width="16" 
              height="150" 
              fill="#FFFFFF" 
              stroke="#E2E8F0" 
              strokeWidth="0.8" 
              rx="1"
            />
            {/* Horizontal cross beam */}
            <rect 
              x="72" 
              y="98" 
              width="96" 
              height="16" 
              fill="#FFFFFF" 
              stroke="#E2E8F0" 
              strokeWidth="0.8" 
              rx="1"
            />
          </g>

          {/* =====================================================
              OPEN HOLY BIBLE (SANTA BIBLIA ABIERTA CON CINTA ROJA)
              ===================================================== */}
          <g id="open-bible" transform="translate(94, 90)">
            {/* Bible Cover backing / shadow */}
            <path
              d="M 2 24 C 14 21, 24 23, 26 26 C 28 23, 38 21, 50 24 L 51 5 C 38 2, 28 4, 26 7 C 24 4, 14 2, 1 5 Z"
              fill="#4A341A"
              stroke="#2C1810"
              strokeWidth="1.2"
            />

            {/* Open White Book Pages */}
            <path
              d="M 3 22 C 14 19, 24 21, 26 24 C 28 21, 38 19, 49 22 L 49 6 C 38 3, 28 5, 26 8 C 24 5, 14 3, 3 6 Z"
              fill="#FFFDF7"
              stroke="#CBD5E1"
              strokeWidth="0.8"
            />

            {/* Scripture script lines on Left Page */}
            <line x1="8" y1="9" x2="21" y2="7.5" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="12.5" x2="22" y2="11" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="8" y1="16" x2="20" y2="14.5" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />
            <text x="14" y="20" textAnchor="middle" fontSize="4.5" fill="#1E293B" fontFamily="serif" fontWeight="bold">
              Jn 8:32
            </text>

            {/* Scripture script lines on Right Page */}
            <line x1="31" y1="7.5" x2="44" y2="9" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="30" y1="11" x2="44" y2="12.5" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="31" y1="14.5" x2="43" y2="16" stroke="#334155" strokeWidth="0.8" strokeLinecap="round" />
            <text x="38" y="20" textAnchor="middle" fontSize="4.5" fill="#1E293B" fontFamily="serif" fontWeight="bold">
              IHS
            </text>

            {/* Red Bookmark Ribbon (Cinta señalizadora roja) */}
            <path
              d="M 25 8 Q 26 20, 24 33 Q 27 34, 29 32 Q 27 20, 27 8 Z"
              fill="#E53E3E"
              stroke="#9B2C2C"
              strokeWidth="0.6"
            />
          </g>

        </g>

        {/* Top Arc Inscription: "LICATEBA" */}
        <rect x="74" y="32" width="92" height="15" rx="3" fill="#143D24" stroke="#D4AF37" strokeWidth="1" />
        <text
          x="120"
          y="43.5"
          textAnchor="middle"
          fill="#FFF275"
          fontSize="10"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="2.5"
        >
          LICATEBA
        </text>

        {/* Bottom Arc Banner along the shield curve */}
        <text
          fill="#FFFFFF"
          fontSize="6.8"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          letterSpacing="0.4"
        >
          <textPath href="#bottomShieldCurve" startOffset="50%" textAnchor="middle">
            LICEO CATÓLICO TECNOLÓGICO DE BARAHONA
          </textPath>
        </text>

      </g>
    </svg>
  );
};
