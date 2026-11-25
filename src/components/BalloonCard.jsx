import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function BalloonCard({ onNext }) {
  const [poppedIndex, setPoppedIndex] = useState({});
  const [currentMessage, setCurrentMessage] = useState('Klik salah satu balon di atas untuk membuka pesannya!');

  const balloons = [
    {
      color: 'bg-[#FF9EAA]',
      icon: 'fa-cat',
      msg: 'Kamu pacarku yang paliiiiing cantiiiiik sedunia!'
    },
    {
      color: 'bg-[#FFD07B]',
      icon: 'fa-star',
      msg: 'Selamat 19 tahun! Makin cantik, makin pintar, dan lucuuu ya sayang'
    },
    {
      color: 'bg-[#D1B3FF]',
      icon: 'fa-heart',
      msg: 'Semoga di umur 19 ini semua impian & doa ina dimudahkan yaa!'
    },
    {
      color: 'bg-[#FFC069]',
      icon: 'fa-paw',
      msg: 'Terima kasih karna udah mau jadi pacar aku yang paling cantik imut dan lucuuuu'
    }
  ];

  const handlePop = (idx, e) => {
    if (poppedIndex[idx]) return;

    sounds.playPop();
    setPoppedIndex((prev) => ({ ...prev, [idx]: true }));
    setCurrentMessage(balloons[idx].msg);

    // Confetti from balloon coordinates
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 45,
      origin: { x, y },
      colors: ['#FF8DA1', '#FFE066', '#C1A1FF']
    });
  };

  return (
    <div className="flex flex-col items-center justify-between h-full py-3.5 sm:py-6 px-3 sm:px-6 text-center select-none">
      {/* Top Header */}
      <div className="pt-1">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 text-pastel-darkPink font-bold text-xs sm:text-sm border border-pink-200">
          <i className="fa-solid fa-wand-magic-sparkles text-xs"></i> Mini-Game Spesial
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-pastel-darkPink mt-1 sm:mt-2">
          Pecahin Balon Ulang Tahunmu satu persatu yaa!
        </h2>
        <p className="text-xs sm:text-base text-pastel-muted max-w-xs sm:max-w-md mx-auto mt-0.5">
          Ada pesan rahasia di dalam setiap balon untuk inaa!
        </p>
      </div>

      {/* Middle Interactive Section: Message Box & Balloons (Menyesuaikan lebar layar) */}
      <div className="my-auto w-full max-w-sm sm:max-w-lg md:max-w-xl flex flex-col items-center">
        {/* Message Box */}
        <div className="w-full bg-pink-50/90 border border-pink-200 rounded-2xl p-3 sm:p-4 flex items-center gap-3 text-left shadow-xs mb-3 sm:mb-4 min-h-[60px] sm:min-h-[68px] transition-all">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-pink-100 text-pastel-darkPink text-sm sm:text-base">
            <i className="fa-solid fa-envelope-open-text"></i>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-pastel-dark leading-snug">{currentMessage}</p>
        </div>

        {/* Balloons Grid (2 kolom di HP, 4 kolom di layar lebar) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 w-full">
          {balloons.map((b, idx) => {
            const isPopped = poppedIndex[idx];
            return (
              <div
                key={idx}
                onClick={(e) => handlePop(idx, e)}
                className={`p-3 sm:p-4 rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center min-h-[110px] sm:min-h-[130px] ${
                  isPopped
                    ? 'border-gray-200 bg-gray-50/50 opacity-60 pointer-events-none'
                    : 'border-pink-200 bg-[#FFFDF9] hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                {isPopped ? (
                  <div className="flex flex-col items-center justify-center text-xs sm:text-sm font-bold text-pastel-darkPink gap-1">
                    <i className="fa-solid fa-sparkles text-amber-400 text-base"></i>
                    <span>Pecah!</span>
                  </div>
                ) : (
                  <>
                    <div
                      className={`w-12 h-14 sm:w-14 sm:h-16 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] ${b.color} text-white flex items-center justify-center text-lg sm:text-xl shadow-sm relative`}
                    >
                      <i className={`fa-solid ${b.icon}`}></i>
                      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-stone-300"></span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-pastel-muted mt-3">Pencet aku!</span>
                  </>
                )}
              </div>
            );
          })}
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
