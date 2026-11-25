import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function HugCard() {
  const [progress, setProgress] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const timerRef = useRef(null);
  const soundThrottleRef = useRef(0);

  const startHugging = (e) => {
    if (e) {
      if (e.cancelable) e.preventDefault();
    }
    if (isCompleted) return;

    setIsPressing(true);
  };

  const stopHugging = () => {
    if (isCompleted) return;
    setIsPressing(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (isPressing && !isCompleted) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 2;

          // Sound & Haptic every ~10%
          const now = Date.now();
          if (now - soundThrottleRef.current > 150) {
            soundThrottleRef.current = now;
            sounds.playHeartbeat(next);
            if (navigator.vibrate) {
              try {
                navigator.vibrate(40);
              } catch (err) {}
            }
          }

          if (next >= 100) {
            clearInterval(timerRef.current);
            setIsPressing(false);
            setIsCompleted(true);
            triggerCompletion();
            return 100;
          }
          return next;
        });
      }, 50);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPressing, isCompleted]);

  const triggerCompletion = () => {
    sounds.playChime();
    if (navigator.vibrate) {
      try {
        navigator.vibrate([100, 60, 200, 60, 300]);
      } catch (err) {}
    }
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF6B81', '#FFB4C2', '#FFE066', '#FF8DA1', '#E5D4FF'],
    });
  };

  const handleReset = () => {
    sounds.playPop();
    setProgress(0);
    setIsCompleted(false);
    setIsPressing(false);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full py-3.5 sm:py-6 px-3 sm:px-6 text-center select-none">
      {/* Header Badge */}
      <div className="pt-1">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pastel-pink/15 text-pastel-darkPink font-bold text-xs sm:text-sm border border-pastel-pink/30 shadow-sm">
          <i className="fa-solid fa-heart-pulse"></i> Virtual Hug Meter
        </span>
      </div>

      {/* Main Interactive Hug Area */}
      <div className="my-auto flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h2 className="text-xl sm:text-3xl font-bold text-pastel-dark mb-1 flex items-center justify-center gap-1.5">
          <span>Mesin Peluk Jarak Jauh</span>
          <i className="fa-solid fa-heart text-pastel-darkPink text-lg sm:text-2xl"></i>
        </h2>
        <p className="text-xs sm:text-base text-pastel-muted max-w-xs sm:max-w-md mb-2 sm:mb-4">
          {isCompleted
            ? 'Pelukan hangat sudah sampai ke kamu!'
            : 'Tahan tombol hati di bawah sampai 100% agar di peluk sama pipan!'}
        </p>

        {/* Hugging Visual */}
        <div className="relative my-2 sm:my-3 flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-visible">
          {!isCompleted ? (
            /* Cat Ready To Hug / Long-distance (Cute Kitten Waiting) */
            <div className={`transition-transform duration-200 overflow-visible ${isPressing ? 'scale-105' : 'scale-100'}`}>
              <svg className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-visible drop-shadow-md" viewBox="0 -18 200 222">
                <defs>
                  <radialGradient id="waitingHeartGlow" cx="50%" cy="45%" r="55%">
                    <stop offset="0%" stopColor="#FFF5F7" />
                    <stop offset="70%" stopColor="#FFE8EE" />
                    <stop offset="100%" stopColor="#FFD4DF" />
                  </radialGradient>
                </defs>

                {/* Big Plump Beautiful Heart (Bentuk Love Sempurna & Tidak Gepeng) */}
                <path
                  d="M 100 56 C 90 24 50 18 28 44 C 0 76 6 126 48 160 C 72 182 92 195 100 198 C 108 195 128 182 152 160 C 194 126 200 76 172 44 C 150 18 110 24 100 56 Z"
                  fill="url(#waitingHeartGlow)"
                  stroke="#FF8DA1"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Floating Love on Top (Detak Jantung Halus, Tidak Loncat Melewati Batas) */}
                <g
                  className={`transition-transform duration-150 ${isPressing ? 'scale-125' : 'scale-100'}`}
                  style={{ transformOrigin: '100px 38px' }}
                >
                  <path
                    d="M 100 30 C 96 23 87 23 83 27 C 78 33 82 40 100 50 C 118 40 122 33 117 27 C 113 23 104 23 100 30 Z"
                    fill="#FF4757"
                  />
                </g>
                <circle cx="55" cy="40" r="2.5" fill="#FFD166" />
                <circle cx="145" cy="40" r="2.5" fill="#FFD166" />

                {/* Cat Body */}
                <path
                  d="M 72 125 C 65 145 72 170 100 170 C 128 170 135 145 128 125 C 122 110 78 110 72 125 Z"
                  fill="#FFF2EB"
                  stroke="#FFAAA6"
                  strokeWidth="2.5"
                />

                {/* Tail */}
                <path
                  d="M 126 155 Q 146 158 144 142 Q 142 130 134 135"
                  fill="none"
                  stroke="#FFAAA6"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Cat Ears */}
                <path d="M 68 85 Q 56 60 78 70 Q 86 80 88 88 Z" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="2" />
                <path d="M 70 82 Q 62 66 75 72 Z" fill="#FF8DA1" />
                <path d="M 132 85 Q 144 60 122 70 Q 114 80 112 88 Z" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="2" />
                <path d="M 130 82 Q 138 66 125 72 Z" fill="#FF8DA1" />

                {/* Cat Head */}
                <ellipse cx="100" cy="98" rx="33" ry="28" fill="#FFFDF9" stroke="#FFAAA6" strokeWidth="2.5" />

                {/* Sparkly Big Eyes */}
                <ellipse cx="86" cy="95" rx="6" ry="7.5" fill="#3D3D3D" />
                <circle cx="84" cy="92" r="2.5" fill="#FFFFFF" />
                <circle cx="88" cy="97" r="1.2" fill="#FFFFFF" />

                <ellipse cx="114" cy="95" rx="6" ry="7.5" fill="#3D3D3D" />
                <circle cx="112" cy="92" r="2.5" fill="#FFFFFF" />
                <circle cx="116" cy="97" r="1.2" fill="#FFFFFF" />

                {/* Blushing Cheeks */}
                <ellipse cx="78" cy="103" rx="6" ry="4" fill="#FFB4C2" opacity="0.8" />
                <ellipse cx="122" cy="103" rx="6" ry="4" fill="#FFB4C2" opacity="0.8" />

                {/* Cute Nose & Mouth */}
                <polygon points="98,102 102,102 100,105" fill="#FF6B81" />
                <path d="M 96 107 Q 100 111 100 107 Q 100 111 104 107" fill="none" stroke="#3D3D3D" strokeWidth="1.8" strokeLinecap="round" />

                {/* Open Paws Reaching Forward (Memeluk) */}
                <g className={isPressing ? 'animate-bounce' : ''}>
                  <ellipse cx="74" cy="132" rx="10" ry="8" fill="#FFFDF9" stroke="#FFAAA6" strokeWidth="2" />
                  <ellipse cx="74" cy="132" rx="4" ry="3" fill="#FF8DA1" />
                  <ellipse cx="126" cy="132" rx="10" ry="8" fill="#FFFDF9" stroke="#FFAAA6" strokeWidth="2" />
                  <ellipse cx="126" cy="132" rx="4" ry="3" fill="#FF8DA1" />
                </g>
              </svg>
            </div>
          ) : (
            /* Two Cats Hugging Tight (100% Achieved - Super Cute Kawaii Pelukan Pipan & Ghina) */
            <div className="animate-bounce overflow-visible pt-1">
              <svg className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-visible drop-shadow-lg" viewBox="0 -18 200 222">
                <defs>
                  <radialGradient id="hugHeartGlow" cx="50%" cy="45%" r="55%">
                    <stop offset="0%" stopColor="#FFF0F5" />
                    <stop offset="70%" stopColor="#FFE4EC" />
                    <stop offset="100%" stopColor="#FFD1DC" />
                  </radialGradient>
                </defs>

                {/* Big Plump Heart Background (Bentuk Hati Sempurna, Tidak Gepeng) */}
                <path
                  d="M 100 56 C 90 24 50 18 28 44 C 0 76 6 126 48 160 C 72 182 92 195 100 198 C 108 195 128 182 152 160 C 194 126 200 76 172 44 C 150 18 110 24 100 56 Z"
                  fill="url(#hugHeartGlow)"
                  stroke="#FF8DA1"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />

                {/* Floating Sparkles and Heart on Top */}
                <path
                  d="M 100 30 C 96 23 87 23 83 27 C 78 33 82 40 100 50 C 118 40 122 33 117 27 C 113 23 104 23 100 30 Z"
                  fill="#FF4757"
                />
                <circle cx="55" cy="40" r="2.5" fill="#FFD166" />
                <circle cx="145" cy="40" r="2.5" fill="#FFD166" />

                {/* Left Cat Tail (Pipan) */}
                <path d="M 58 152 Q 38 155 40 140 Q 42 128 50 133" fill="none" stroke="#FFAAA6" strokeWidth="5" strokeLinecap="round" />
                {/* Right Cat Tail (Ghina) */}
                <path d="M 142 152 Q 162 155 160 140 Q 158 128 150 133" fill="none" stroke="#FFAAA6" strokeWidth="5" strokeLinecap="round" />

                {/* Left Cat Body (Pipan - Cream White) */}
                <path
                  d="M 56 122 C 50 140 56 166 82 166 C 98 166 104 154 104 136 C 104 122 96 112 78 112 C 64 112 56 116 56 122 Z"
                  fill="#FFFDF9"
                  stroke="#FFAAA6"
                  strokeWidth="2.5"
                />

                {/* Right Cat Body (Ghina - Soft Peach) */}
                <path
                  d="M 144 122 C 150 140 144 166 118 166 C 102 166 96 154 96 136 C 96 122 104 112 122 112 C 136 112 144 116 144 122 Z"
                  fill="#FFF2EB"
                  stroke="#FFAAA6"
                  strokeWidth="2.5"
                />

                {/* Left Cat Ears (Pipan) */}
                <path d="M 54 88 Q 46 66 65 74 Q 72 82 74 90 Z" fill="#FFFDF9" stroke="#FFAAA6" strokeWidth="2" />
                <path d="M 56 85 Q 50 71 62 76 Z" fill="#FF8DA1" />
                <path d="M 85 82 Q 92 66 100 78 Q 96 86 91 89 Z" fill="#FFFDF9" stroke="#FFAAA6" strokeWidth="1.8" />
                <path d="M 87 81 Q 92 72 97 79 Z" fill="#FF8DA1" />
                {/* Left Cat Head Ellipse */}
                <ellipse cx="75" cy="102" rx="24" ry="21" fill="#FFFDF9" stroke="#FFAAA6" strokeWidth="2.5" />
                {/* Left Cat Eyes (Sepasang Dua Mata Tersenyum Lengkap) */}
                <path d="M 62 101 Q 66 95 70 101" fill="none" stroke="#3D3D3D" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 78 101 Q 82 95 86 101" fill="none" stroke="#3D3D3D" strokeWidth="2.5" strokeLinecap="round" />
                {/* Left Cat Blush (Kiri & Kanan) */}
                <ellipse cx="59" cy="107" rx="4" ry="2.5" fill="#FFB4C2" />
                <ellipse cx="89" cy="107" rx="4" ry="2.5" fill="#FFB4C2" />
                {/* Left Cat Nose & Cute Smile */}
                <polygon points="74,104 76,104 75,106" fill="#FF6B81" />
                <path d="M 72 108 Q 75 111 75 108 Q 75 111 78 108" fill="none" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" />
                {/* Left Cat Whiskers */}
                <line x1="56" y1="104" x2="48" y2="102" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="56" y1="108" x2="48" y2="109" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

                {/* Right Cat Ears (Ghina) */}
                <path d="M 115 82 Q 108 66 100 78 Q 104 86 109 89 Z" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="1.8" />
                <path d="M 113 81 Q 108 72 103 79 Z" fill="#FF8DA1" />
                <path d="M 146 88 Q 154 66 135 74 Q 128 82 126 90 Z" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="2" />
                <path d="M 144 85 Q 150 71 138 76 Z" fill="#FF8DA1" />
                {/* Cute Flower on Ghina's Ear */}
                <circle cx="138" cy="74" r="3.5" fill="#FF6B81" />
                <circle cx="134" cy="72" r="2.5" fill="#FF8DA1" />
                <circle cx="142" cy="72" r="2.5" fill="#FF8DA1" />
                <circle cx="138" cy="74" r="1.5" fill="#FFE066" />
                {/* Right Cat Head Ellipse */}
                <ellipse cx="125" cy="102" rx="24" ry="21" fill="#FFF2EB" stroke="#FFAAA6" strokeWidth="2.5" />
                {/* Right Cat Eyes (Sepasang Dua Mata Tersenyum Lengkap) */}
                <path d="M 114 101 Q 118 95 122 101" fill="none" stroke="#3D3D3D" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 130 101 Q 134 95 138 101" fill="none" stroke="#3D3D3D" strokeWidth="2.5" strokeLinecap="round" />
                {/* Right Cat Blush (Kiri & Kanan) */}
                <ellipse cx="111" cy="107" rx="4" ry="2.5" fill="#FFB4C2" />
                <ellipse cx="141" cy="107" rx="4" ry="2.5" fill="#FFB4C2" />
                {/* Right Cat Nose & Cute Smile */}
                <polygon points="125,104 127,104 126,106" fill="#FF6B81" />
                <path d="M 123 108 Q 126 111 126 108 Q 126 111 129 108" fill="none" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" />
                {/* Right Cat Whiskers */}
                <line x1="144" y1="104" x2="152" y2="102" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="144" y1="108" x2="152" y2="109" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

                {/* Entwined Hugging Arms (Memeluk Hangat dari Kedua Sisi) */}
                {/* Left Cat Arm wrapping around Right Cat */}
                <path
                  d="M 80 118 C 94 118 116 123 118 130 C 120 135 114 138 108 136 C 96 132 84 126 80 123 Z"
                  fill="#FFFDF9"
                  stroke="#FFAAA6"
                  strokeWidth="2.2"
                />
                {/* Right Cat Arm wrapping around Left Cat */}
                <path
                  d="M 120 118 C 106 118 84 123 82 130 C 80 135 86 138 92 136 C 104 132 116 126 120 123 Z"
                  fill="#FFF2EB"
                  stroke="#FFAAA6"
                  strokeWidth="2.2"
                />

                {/* Little Center Hugging Heart in their hands */}
                <path
                  d="M 100 128 C 97 123 91 123 88 126 C 84 131 87 136 100 144 C 113 136 116 131 112 126 C 109 123 103 123 100 128 Z"
                  fill="#FF6B81"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Hug Meter Progress Bar */}
        <div className="w-full bg-pink-100 rounded-full h-4 sm:h-5 p-0.5 border border-pink-200 relative overflow-hidden mb-2 shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pastel-pink to-pastel-darkPink transition-all duration-75 flex items-center justify-end pr-2"
            style={{ width: `${progress}%` }}
          >
            {progress > 15 && (
              <span className="text-[10px] font-extrabold text-white leading-none">
                {progress}%
              </span>
            )}
          </div>
          {progress <= 15 && (
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-pastel-darkPink">
              {progress}%
            </span>
          )}
        </div>

        {/* Status / Message */}
        {isCompleted ? (
          <div className="bg-pastel-pink/15 rounded-2xl p-3 border border-pastel-pink/30 mb-3 animate-fade-in">
            <p className="text-xs sm:text-sm font-bold text-pastel-darkPink flex items-center justify-center gap-1.5">
              <span>Pelukan 100% Sukses Terkirim!</span>
              <i className="fa-solid fa-heart text-pastel-darkPink text-xs"></i>
            </p>
            <p className="text-[11px] text-pastel-muted mt-1 leading-relaxed">
              Buat sekarang emang masih jarak jauh tapi nanti aku bakal peluk erat kamu dari deket
            </p>
          </div>
        ) : null}

        {/* Big Action / Hold Button */}
        {!isCompleted ? (
          <button
            onMouseDown={startHugging}
            onMouseUp={stopHugging}
            onMouseLeave={stopHugging}
            onTouchStart={startHugging}
            onTouchEnd={stopHugging}
            onTouchCancel={stopHugging}
            className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base text-white shadow-lg transition-all duration-150 flex items-center justify-center gap-2 select-none touch-none ${
              isPressing
                ? 'bg-gradient-to-r from-red-500 to-pastel-darkPink scale-98 shadow-inner ring-4 ring-pink-200'
                : 'bg-gradient-to-r from-pastel-darkPink to-pastel-pink hover:opacity-95 active:scale-95'
            }`}
          >
            <i className={`fa-solid fa-heart ${isPressing ? 'animate-ping' : ''}`}></i>
            <span>{isPressing ? `Memeluk Ghina (${progress}%)...` : 'Tahan Tombol Ini untuk Peluk'}</span>
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-full bg-white text-pastel-darkPink border border-pastel-pink font-bold text-xs sm:text-sm shadow-sm hover:bg-pink-50 transition active:scale-95 flex items-center gap-1.5"
          >
            <i className="fa-solid fa-rotate-right"></i>
            <span>Kirim Pelukan Lagi</span>
            <i className="fa-solid fa-heart text-pastel-darkPink text-xs"></i>
          </button>
        )}
      </div>

      {/* Footer Info */}
      <div className="pb-1 text-[11px] text-pastel-muted flex items-center justify-center gap-1 opacity-75">
        <i className="fa-solid fa-paw text-pastel-darkPink"></i> Dibuat khusus dengan segenap cinta untuk Ghina
      </div>
    </div>
  );
}
