import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function CakeCard() {
  const [isBlown, setIsBlown] = useState(false);

  const handleBlow = () => {
    if (isBlown) return;
    setIsBlown(true);
    sounds.playBlow();
    setTimeout(() => {
      sounds.playChime();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B81', '#FFB4C2', '#FFE066', '#B4E4FF', '#E5D4FF'],
      });
    }, 400);
  };

  const handleRelight = () => {
    setIsBlown(false);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full py-3.5 sm:py-6 px-3 sm:px-6 text-center select-none">
      {/* Header Badge */}
      <div className="pt-1">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pastel-pink/15 text-pastel-darkPink font-bold text-xs sm:text-sm border border-pastel-pink/30 shadow-sm">
          <i className="fa-solid fa-wand-magic-sparkles"></i> Make a Wish, Ghina!
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto flex flex-col items-center w-full max-w-sm sm:max-w-lg">
        <h2 className="text-xl sm:text-3xl font-bold text-pastel-dark mb-1 flex items-center justify-center gap-1.5">
          <span>Kue Ulang Tahun Spesial</span>
          <i className="fa-solid fa-cake-candles text-amber-500 text-lg sm:text-2xl"></i>
        </h2>
        <p className="text-xs sm:text-base text-pastel-muted max-w-xs sm:max-w-md mb-2 sm:mb-4">
          Tutup matamu, sebutkan semua harapan terbaikmu, lalu tiup lilin angka 19 ini yaa!
        </p>

        {/* Cake Illustration */}
        <div className="relative my-2 sm:my-3 flex justify-center items-center w-60 h-48 sm:w-76 sm:h-60 md:w-88 md:h-70">
          <svg className="w-full h-full drop-shadow-md" viewBox="0 0 240 220">
            {/* Piring Kue */}
            <ellipse cx="120" cy="205" rx="100" ry="12" fill="#E2E8F0" />
            <ellipse cx="120" cy="202" rx="90" ry="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />

            {/* Layer Bawah Kue */}
            <rect x="45" y="140" width="150" height="55" rx="8" fill="#FFB4C2" />
            {/* Tekstur Krim Bawah */}
            <path d="M45,155 Q60,165 75,155 Q90,165 105,155 Q120,165 135,155 Q150,165 165,155 Q180,165 195,155 L195,140 L45,140 Z" fill="#FFE5D9" />
            <circle cx="70" cy="175" r="4" fill="#FFFFFF" opacity="0.8" />
            <circle cx="120" cy="175" r="4" fill="#FFFFFF" opacity="0.8" />
            <circle cx="170" cy="175" r="4" fill="#FFFFFF" opacity="0.8" />

            {/* Layer Atas Kue */}
            <rect x="70" y="95" width="100" height="50" rx="6" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="2" />
            {/* Drip Cream Atas */}
            <path d="M70,110 Q80,122 90,110 Q100,125 110,110 Q120,122 130,110 Q140,125 150,110 Q160,122 170,110 L170,95 L70,95 Z" fill="#FF8DA1" />
            <circle cx="85" cy="130" r="3.5" fill="#FF6B81" />
            <circle cx="120" cy="130" r="3.5" fill="#FF6B81" />
            <circle cx="155" cy="130" r="3.5" fill="#FF6B81" />

            {/* Buah Stroberi Manis */}
            <circle cx="95" cy="92" r="7" fill="#FF4757" />
            <circle cx="145" cy="92" r="7" fill="#FF4757" />
            <polygon points="95,83 93,87 97,87" fill="#2ED573" />
            <polygon points="145,83 143,87 147,87" fill="#2ED573" />

            {/* Lilin Angka 19 */}
            {/* Lilin Batang Tengah */}
            <rect x="117" y="45" width="6" height="48" rx="3" fill="#FFE066" stroke="#F1C40F" strokeWidth="1" />
            <path d="M117,55 L123,59 M117,67 L123,71 M117,79 L123,83" stroke="#FF6B81" strokeWidth="2" />

            {/* Badge Angka 19 di lilin */}
            <rect x="106" y="55" width="28" height="20" rx="10" fill="#FF6B81" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="120" y="69" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Fredoka, sans-serif">19</text>

            {/* Sumbu Lilin */}
            <line x1="120" y1="45" x2="120" y2="38" stroke="#555" strokeWidth="2" />

            {/* Api Lilin (Interaktif) */}
            {!isBlown ? (
              <g className="animate-flicker origin-bottom" style={{ transformOrigin: '120px 38px' }}>
                {/* Glow luar */}
                <ellipse cx="120" cy="26" rx="9" ry="14" fill="#FFD166" opacity="0.6" filter="blur(1px)" />
                {/* Api merah muda-oranye */}
                <path d="M120,12 C115,22 112,28 114,35 C116,40 124,40 126,35 C128,28 125,22 120,12 Z" fill="#FF9F43" />
                {/* Inti api kuning menyala */}
                <ellipse cx="120" cy="30" rx="3.5" ry="6" fill="#FECA57" />
                <ellipse cx="120" cy="32" rx="1.5" ry="3" fill="#FFFFFF" />
              </g>
            ) : (
              /* Asap Lilin Mati */
              <g className="animate-smoke">
                <circle cx="120" cy="32" r="3" fill="#A0AEC0" opacity="0.7" />
                <circle cx="118" cy="25" r="4" fill="#CBD5E1" opacity="0.5" />
                <circle cx="123" cy="18" r="5" fill="#E2E8F0" opacity="0.3" />
              </g>
            )}
          </svg>
        </div>

        {/* Pesan saat lilin ditiup */}
        {isBlown ? (
          <div className="bg-pastel-pink/15 rounded-2xl p-2.5 max-w-xs border border-pastel-pink/30 mb-2 animate-bounce">
            <p className="text-xs sm:text-sm font-bold text-pastel-darkPink flex items-center justify-center gap-1.5">
              <span>Yeay! Lilin berhasil ditiup!</span>
              <i className="fa-solid fa-sparkles text-amber-500"></i>
            </p>
            <p className="text-[11px] text-pastel-muted mt-0.5 flex items-center justify-center gap-1">
              <span>Semoga semua harapan & doamu terkabul, Aamiin!</span>
              <i className="fa-solid fa-heart text-pastel-darkPink text-[10px]"></i>
            </p>
          </div>
        ) : null}

        {/* Action Button */}
        <div className="flex gap-2 justify-center mt-1">
          {!isBlown ? (
            <button
              onClick={handleBlow}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pastel-darkPink to-pastel-pink text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
            >
              <i className="fa-solid fa-wind text-sm"></i> Tiup Lilin 19 Sekarang!
            </button>
          ) : (
            <button
              onClick={handleRelight}
              className="px-4 py-2 rounded-full bg-white text-pastel-darkPink border border-pastel-pink font-bold text-xs shadow-sm hover:bg-pastel-peach/30 transition flex items-center gap-1.5"
            >
              <i className="fa-solid fa-fire text-amber-500"></i> Nyalakan Lilin Lagi
            </button>
          )}
        </div>
      </div>

      {/* Swipe Hint Footer */}
      <div className="pb-1 text-[11px] text-pastel-darkPink flex items-center justify-center gap-1.5 opacity-85 select-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50/80 border border-pink-200/60 shadow-xs animate-swipe-hint">
          <i className="fa-solid fa-angles-left text-[9px] text-pastel-darkPink"></i>
          <span className="font-medium text-pastel-dark">Geser layar untuk lanjut</span>
          <i className="fa-solid fa-angles-right text-[9px] text-pastel-darkPink"></i>
        </span>
      </div>
    </div>
  );
}
