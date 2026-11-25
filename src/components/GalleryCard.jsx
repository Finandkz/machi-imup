import React, { useState } from 'react';
import { sounds } from '../utils/audio';

const MEMORIES = [
  {
    id: 1,
    title: 'Senyum kamu yang selalu manis',
    desc: 'Ngeliat senyuman kamu itu selalu bikin hatiku berdebar kencang .',
    image: '/photos/foto1.jpeg',
    tag: 'Favorite Moment',
    isPortrait: true,
    bg: 'from-pink-100 to-rose-50',
    accent: '#FF6B81',
    svgIcon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill="#FFE5D9" />
        <ellipse cx="35" cy="55" rx="5" ry="3" fill="#FFB4C2" />
        <ellipse cx="65" cy="55" rx="5" ry="3" fill="#FFB4C2" />
        <path d="M30,45 Q35,38 40,45" fill="none" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" />
        <path d="M60,45 Q65,38 70,45" fill="none" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" />
        <path d="M42,56 Q50,68 58,56" fill="none" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="72" cy="30" r="5" fill="#FF8DA1" />
        <circle cx="68" cy="26" r="4" fill="#FFD166" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Si Paling Gemesin',
    desc: 'Kamu bakal selalu jadi pacar aku yang paling gemeessin sedunia !',
    image: '/photos/foto2.jpeg',
    tag: 'Gemes Banget',
    isPortrait: false,
    bg: 'from-amber-50 to-orange-50',
    accent: '#FF9F43',
    svgIcon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" viewBox="0 0 100 100">
        <circle cx="50" cy="52" r="38" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="2" />
        <polygon points="25,35 35,15 48,32" fill="#FF8DA1" />
        <polygon points="75,35 65,15 52,32" fill="#FF8DA1" />
        <ellipse cx="38" cy="48" rx="4" ry="5" fill="#4A3E3D" />
        <ellipse cx="62" cy="48" rx="4" ry="5" fill="#4A3E3D" />
        <circle cx="36" cy="46" r="1.5" fill="#FFF" />
        <circle cx="60" cy="46" r="1.5" fill="#FFF" />
        <polygon points="48,56 52,56 50,59" fill="#FF6B81" />
        <path d="M45,61 Q50,65 50,61 Q50,65 55,61" fill="none" stroke="#4A3E3D" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="52" x2="12" y2="50" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="58" x2="12" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="52" x2="88" y2="50" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="58" x2="88" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Semua Cerita Random Kita',
    desc: 'Dari curhat panjang sampai lelucon ga jelas, tiap ngobrol sama kamu selalu seru.',
    image: '/photos/foto3.jpeg',
    tag: 'Obrolan Random Kita',
    isPortrait: true,
    bg: 'from-blue-50 to-indigo-50',
    accent: '#54A0FF',
    svgIcon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" viewBox="0 0 100 100">
        <rect x="15" y="22" width="45" height="32" rx="10" fill="#B4E4FF" />
        <polygon points="25,54 25,64 35,54" fill="#B4E4FF" />
        <circle cx="28" cy="38" r="3" fill="#FFF" />
        <circle cx="38" cy="38" r="3" fill="#FFF" />
        <circle cx="48" cy="38" r="3" fill="#FFF" />
        <rect x="42" y="42" width="45" height="32" rx="10" fill="#FFB4C2" />
        <polygon points="75,74 75,84 65,74" fill="#FFB4C2" />
        <circle cx="55" cy="58" r="3" fill="#FFF" />
        <circle cx="65" cy="58" r="3" fill="#FFF" />
        <circle cx="75" cy="58" r="3" fill="#FFF" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Cantik Banget Pacar Aku',
    desc: 'Aku gabisa stop bilang kamu cantik seakan akan dunia harus tau kalo pacar aku secantik ini', 
    image: '/photos/foto4.jpeg',
    tag: 'Cantik Bangettt!!',
    isPortrait: true,
    bg: 'from-emerald-50 to-teal-50',
    accent: '#10B981',
    svgIcon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#D1FAE5" />
        <path d="M50,25 C35,10 15,30 50,75 C85,30 65,10 50,25 Z" fill="#34D399" />
        <circle cx="50" cy="45" r="8" fill="#FFF" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Happy 19th Birthday Sayang',
    desc: 'Sisa dubai chewy cookie yang masih nempel di bibir kamu itu bikin kamu keliatan lucu banget dimata aku',
    image: '/photos/foto5.jpeg',
    tag: 'Always & Forever',
    isPortrait: true,
    bg: 'from-purple-50 to-pink-50',
    accent: '#9B59B6',
    svgIcon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#E5D4FF" />
        <polygon points="50,18 58,34 75,34 62,45 67,62 50,52 33,62 38,45 25,34 42,34" fill="#FFD166" />
        <circle cx="50" cy="50" r="24" fill="#FFF" />
        <text x="50" y="56" textAnchor="middle" fill="#9B59B6" fontSize="16" fontWeight="bold" fontFamily="Fredoka, sans-serif">19</text>
      </svg>
    ),
  },
];

export default function GalleryCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
  const [imgErrors, setImgErrors] = useState({});
  const [detectedPortrait, setDetectedPortrait] = useState({});

  const current = MEMORIES[currentIndex];

  const handleNext = () => {
    sounds.playPop();
    setCurrentIndex((prev) => (prev + 1) % MEMORIES.length);
  };

  const handlePrev = () => {
    sounds.playPop();
    setCurrentIndex((prev) => (prev - 1 + MEMORIES.length) % MEMORIES.length);
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    sounds.playPop();
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const isPhotoAvailable = current.image && !imgErrors[current.id];
  // Menentukan apakah foto portrait atau landscape
  const isPortrait = detectedPortrait[current.id] !== undefined
    ? detectedPortrait[current.id]
    : current.isPortrait;

  return (
    <div className="flex flex-col items-center justify-between h-full py-2.5 sm:py-3 px-2 text-center select-none">
      {/* Header Badge */}
      <div className="pt-0.5 sm:pt-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-yellow/30 text-amber-900 font-bold text-xs sm:text-sm border border-pastel-yellow shadow-sm">
          <i className="fa-solid fa-camera-retro"></i> Inaa's Gallery
        </span>
      </div>

      {/* Main Polaroid Frame Container */}
      <div className="my-auto flex flex-col items-center w-full">
        {/* Single Responsive Polaroid Card - Ukuran Menyesuaikan Bentuk Foto & Ukuran Layar */}
        <div
          className={`relative bg-white p-3.5 sm:p-5 pb-3.5 sm:pb-4 rounded-2xl sm:rounded-3xl shadow-lg border border-pink-100 transition-all duration-300 mx-auto flex flex-col items-center ${
            isPortrait
              ? 'w-[270px] sm:w-[320px] md:w-[350px]'
              : 'w-[325px] sm:w-[420px] md:w-[470px]'
          }`}
        >
          {/* Washi Tape Decor */}
          <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-6 sm:h-7 bg-pink-200/80 backdrop-blur-sm -rotate-2 rounded-sm shadow-sm border-t border-b border-pink-300/50 z-20 pointer-events-none"></div>

          {/* Photo Preview Box - Full Edge-to-Edge tanpa ruang sisa & tanpa zoom */}
          <div
            className={`w-full ${
              isPortrait
                ? 'h-68 sm:h-84 md:h-96 max-h-[44vh] sm:max-h-[48vh]'
                : 'h-48 sm:h-60 md:h-68 max-h-[32vh] sm:max-h-[36vh]'
            } rounded-xl sm:rounded-2xl bg-gradient-to-br ${current.bg} relative overflow-hidden border border-pink-100/60 shadow-inner transition-all duration-300`}
          >
            {/* Display Actual Photo (Full satu foto tanpa blur samping atau ruang kosong) */}
            {isPhotoAvailable ? (
              <img
                src={current.image}
                alt={current.title}
                onError={() => handleImgError(current.id)}
                className="w-full h-full object-cover object-center select-none"
              />
            ) : (
              /* Fallback Illustration */
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                {current.svgIcon}
              </div>
            )}

            {/* Tag Badge */}
            <span className="absolute top-2.5 left-2.5 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/90 text-pastel-dark shadow-xs backdrop-blur-xs z-10 pointer-events-none">
              {current.tag}
            </span>

            {/* Like Heart Button */}
            <button
              onClick={(e) => toggleLike(current.id, e)}
              className="absolute top-2.5 right-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center transition-transform active:scale-125 z-10"
              aria-label="Like photo"
            >
              <i className={`fa-heart text-sm sm:text-base transition-colors ${likes[current.id] ? 'fa-solid text-red-500 scale-110' : 'fa-regular text-gray-400'}`}></i>
            </button>
          </div>

          {/* Caption Text */}
          <div className="mt-2.5 sm:mt-3 text-left w-full px-1">
            <h3 className="font-bold text-xs sm:text-base text-pastel-dark leading-snug">
              {current.title}
            </h3>
            <p className="text-[11px] sm:text-sm text-pastel-muted mt-0.5 sm:mt-1 leading-relaxed">
              "{current.desc}"
            </p>
          </div>
        </div>

        {/* Polaroid Carousel Controls - Lebar menyesuaikan ukuran Card */}
        <div
          className={`flex items-center justify-between w-full mt-2.5 sm:mt-3 px-2 transition-all duration-300 ${
            isPortrait
              ? 'max-w-[270px] sm:max-w-[320px] md:max-w-[350px]'
              : 'max-w-[325px] sm:max-w-[420px] md:max-w-[470px]'
          }`}
        >
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-white border border-pink-100 shadow-sm text-pastel-darkPink flex items-center justify-center hover:bg-pink-50 active:scale-95 text-xs font-bold"
            aria-label="Previous photo"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* 5 Dots Indicators */}
          <div className="flex gap-1.5 items-center">
            {MEMORIES.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => {
                  sounds.playPop();
                  setCurrentIndex(idx);
                }}
                className={`transition-all rounded-full ${
                  idx === currentIndex ? 'w-5 h-2 bg-pastel-darkPink' : 'w-2 h-2 bg-pink-200'
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-white border border-pink-100 shadow-sm text-pastel-darkPink flex items-center justify-center hover:bg-pink-50 active:scale-95 text-xs font-bold"
            aria-label="Next photo"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Swipe Hint Footer */}
      <div className="pb-0.5 sm:pb-1 text-[11px] text-pastel-darkPink flex items-center justify-center gap-1.5 opacity-85 select-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50/80 border border-pink-200/60 shadow-xs animate-swipe-hint">
          <i className="fa-solid fa-angles-left text-[9px] text-pastel-darkPink"></i>
          <span className="font-medium text-pastel-dark">Geser layar untuk lanjut</span>
          <i className="fa-solid fa-angles-right text-[9px] text-pastel-darkPink"></i>
        </span>
      </div>
    </div>
  );
}
