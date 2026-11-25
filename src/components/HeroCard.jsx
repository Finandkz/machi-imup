import React from 'react';

export default function HeroCard({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-between h-full py-3.5 sm:py-6 px-3 sm:px-6 text-center select-none">
      {/* Top Header Badge */}
      <div className="pt-1 sm:pt-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pastel-yellow to-pastel-peach text-amber-900 font-bold text-xs sm:text-sm shadow-sm border border-amber-200">
          <i className="fa-solid fa-cake-candles"></i> Special 19th Birthday <i className="fa-solid fa-cake-candles"></i>
        </span>
      </div>

      {/* Hero Title & Description */}
      <div className="my-auto w-full max-w-sm sm:max-w-xl flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-pastel-dark leading-tight mb-1">
          Happy Birthday,<br />
          <span className="bg-gradient-to-r from-pastel-darkPink to-pastel-pink bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl font-extrabold filter drop-shadow-sm">
            Ghina Navisa!
          </span>
        </h1>
        <p className="text-xs sm:text-base text-pastel-muted max-w-xs sm:max-w-md md:max-w-lg mx-auto mt-2 sm:mt-3 leading-relaxed">
          Selamat Ulang tahun yang ke 19, pacar kesayanganku yang paling lucu & gemes sedunia!{' '}
          <i className="fa-solid fa-cat text-pastel-darkPink"></i>{' '}
          <i className="fa-solid fa-heart text-pastel-darkPink"></i>
        </p>

        {/* Mascot Cat Illustration */}
        <div className="my-3 sm:my-6 flex justify-center animate-cat-wiggle">
          <svg className="w-36 h-36 sm:w-52 sm:h-52 md:w-60 md:h-60" viewBox="0 0 200 200">
            {/* Topi Pesta */}
            <polygon points="100,20 80,65 120,65" fill="#FF6B81" />
            <circle cx="100" cy="18" r="8" fill="#FFE066" />
            <line x1="85" y1="50" x2="115" y2="50" stroke="#FFE066" strokeWidth="4" />

            {/* Telinga Kucing */}
            <polygon points="45,90 60,40 85,75" fill="#FFB6C1" />
            <polygon points="50,85 62,50 80,73" fill="#FF8DA1" />
            <polygon points="155,90 140,40 115,75" fill="#FFB6C1" />
            <polygon points="150,85 138,50 120,73" fill="#FF8DA1" />

            {/* Kepala Kucing */}
            <ellipse cx="100" cy="105" rx="65" ry="55" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="3" />

            {/* Pipi Merona */}
            <ellipse cx="65" cy="115" rx="10" ry="6" fill="#FFB4C2" opacity="0.8" />
            <ellipse cx="135" cy="115" rx="10" ry="6" fill="#FFB4C2" opacity="0.8" />

            {/* Mata Lucu */}
            <ellipse cx="75" cy="100" rx="7" ry="9" fill="#3D3D3D" />
            <circle cx="73" cy="97" r="3" fill="#FFFFFF" />
            <circle cx="77" cy="103" r="1.5" fill="#FFFFFF" />
            <ellipse cx="125" cy="100" rx="7" ry="9" fill="#3D3D3D" />
            <circle cx="123" cy="97" r="3" fill="#FFFFFF" />
            <circle cx="127" cy="103" r="1.5" fill="#FFFFFF" />

            {/* Hidung & Mulut */}
            <polygon points="97,112 103,112 100,116" fill="#FF6B81" />
            <path d="M94,118 Q100,124 100,118 Q100,124 106,118" fill="none" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />

            {/* Kumis */}
            <line x1="42" y1="108" x2="20" y2="105" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="116" x2="18" y2="119" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />
            <line x1="158" y1="108" x2="180" y2="105" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />
            <line x1="160" y1="116" x2="182" y2="119" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />

            {/* Pita */}
            <ellipse cx="100" cy="155" rx="8" ry="8" fill="#FF6B81" />
            <polygon points="100,155 75,145 75,165" fill="#FF8DA1" />
            <polygon points="100,155 125,145 125,165" fill="#FF8DA1" />
          </svg>
        </div>
      </div>

      {/* Swipe Hint Footer */}
      <div className="pb-1 text-[11px] text-pastel-darkPink flex items-center justify-center gap-1.5 opacity-85 select-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50/80 border border-pink-200/60 shadow-xs animate-swipe-hint">
          <span className="font-medium text-pastel-dark">Geser layar untuk lanjut</span>
          <i className="fa-solid fa-angles-right text-[10px] text-pastel-darkPink"></i>
        </span>
      </div>
    </div>
  );
}
