import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function EnvelopeModal({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterOut, setIsLetterOut] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isExited, setIsExited] = useState(false);

  const handleOpenAnimation = () => {
    if (isOpen) {
      handleProceed();
      return;
    }

    setIsOpen(true);
    sounds.playPop();

    // Semburan konfeti pembuka
    confetti({
      particleCount: 60,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#FF6B81', '#FF8DA1', '#FFD1BA', '#FFE066', '#E8D7FF'],
    });

    // Flap membuka ke atas, lalu kartu meluncur keluar dan pop-up di depan amplop
    setTimeout(() => {
      setIsLetterOut(true);
      sounds.playChime();
    }, 380);
  };

  const handleProceed = () => {
    if (isExiting) return;
    setIsExiting(true);
    sounds.playChime();

    // Konfeti penutup yang meriah
    confetti({
      particleCount: 85,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#FF6B81', '#FF8DA1', '#FFE066', '#B4E4FF'],
    });

    onOpen();

    setTimeout(() => {
      setIsExited(true);
    }, 600);
  };

  // Jeda sekitar 3 detik setelah kartu pop up keluar, lalu otomatis berpindah halaman tanpa tombol
  useEffect(() => {
    if (isLetterOut && !isExiting) {
      const timer = setTimeout(() => {
        handleProceed();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLetterOut, isExiting]);

  if (isExited) return null;

  return (
    <div
      onClick={isLetterOut ? handleProceed : undefined}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#FFF0F5]/95 backdrop-blur-md transition-opacity duration-500 select-none ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Kartu Modal Utama (Desain Pastel dengan Kucing Mengintip) */}
      <div className="relative w-full max-w-[400px] sm:max-w-[460px] md:max-w-[500px] bg-[#FFFDF9] border-2 border-pink-200 rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl text-center select-none overflow-visible">
        {/* Ornamen Kucing Mengintip di Atas Modal */}
        <div className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 z-0">
          <div className="absolute -top-3 left-1 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#FFAAA6] -rotate-12"></div>
          <div className="absolute -top-3 right-1 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#FFAAA6] rotate-12"></div>
          <div className="w-full h-full bg-[#FFF2EB] border-2 border-[#FFAAA6] border-b-0 rounded-t-full flex items-center justify-center gap-3 relative shadow-xs">
            <span className="w-1.5 h-2 bg-[#3D3D3D] rounded-full mt-2"></span>
            <span className="w-1.5 h-1 bg-pastel-darkPink rounded-full mt-3"></span>
            <span className="w-1.5 h-2 bg-[#3D3D3D] rounded-full mt-2"></span>
          </div>
        </div>

        {/* Lencana Atas */}
        <div className="pt-1 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-pink/15 text-pastel-darkPink font-bold text-xs sm:text-sm border border-pastel-pink/30 shadow-xs">
            <i className="fa-solid fa-cake-candles"></i> 19th Birthday Surprise <i className="fa-solid fa-heart text-[10px]"></i>
          </span>
        </div>

        {/* Panggung Amplop & Pop-Up Card */}
        <div
          onClick={!isOpen ? handleOpenAnimation : handleProceed}
          className="relative w-[270px] sm:w-[320px] md:w-[360px] h-[175px] sm:h-[200px] md:h-[220px] mx-auto my-3 cursor-pointer"
          title={isOpen ? 'Otomatis membuka... (klik untuk langsung lanjut)' : 'Klik untuk membuka amplop!'}
        >
          {/* 1. Bagian Dalam Amplop */}
          <div className="absolute inset-0 bg-[#F7B5A0] border-2 border-[#FFAAA6] rounded-2xl shadow-inner z-0"></div>

          {/* 2. Kartu Ucapan (Terselip rapi di dalam amplop saat awal, hanya mengintip sedikit di atas, lalu meluncur pop-up saat dibuka) */}
          <motion.div
            initial={false}
            animate={{
              y: isLetterOut ? -75 : -14,
              scale: isLetterOut ? 1.08 : 0.92,
              opacity: 1,
              boxShadow: isLetterOut
                ? '0 25px 35px -10px rgba(255, 107, 129, 0.45)'
                : '0 2px 6px rgba(0, 0, 0, 0.05)',
            }}
            transition={{
              duration: 0.65,
              type: 'spring',
              stiffness: 160,
              damping: 18,
            }}
            style={{
              zIndex: isLetterOut ? 30 : 5,
            }}
            className={`absolute top-2 left-3 right-3 bg-gradient-to-b from-[#FFFDF9] to-white border-2 border-pink-300 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center transition-shadow ${
              isLetterOut
                ? 'ring-4 ring-pink-200/70 pointer-events-auto shadow-2xl'
                : 'max-h-[152px] sm:max-h-[176px] md:max-h-[195px] overflow-hidden pointer-events-none'
            }`}
          >
            {/* Header Stamp */}
            <div className="w-full flex items-center justify-between px-1 mb-1">
              <span className="text-[9px] font-bold text-pastel-darkPink bg-pink-100/80 px-2 py-0.5 rounded-full border border-pink-200">
                <i className="fa-solid fa-heart mr-1"></i> Special Letter
              </span>
              <span className="text-[9px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                <span>19 Th</span>
                <i className="fa-solid fa-cake-candles text-[9px] text-amber-600"></i>
              </span>
            </div>

            {/* Judul Surat Lengkap Sesuai Permintaan */}
            <h3 className="text-sm sm:text-base font-extrabold text-pastel-darkPink leading-snug">
              Ucapan Selamat Ulang Tahun<br />
              <span className="inline-flex items-center gap-1">
                <span>Pacarku Tersayang</span>
                <i className="fa-solid fa-heart text-pastel-darkPink text-xs"></i>
              </span>
            </h3>

            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent my-1.5 rounded-full"></div>

            <p className="text-xs font-bold text-pastel-dark leading-tight flex items-center justify-center gap-1">
              <span>Untuk Ina Tercinta</span>
              <i className="fa-solid fa-wand-magic-sparkles text-pastel-pink text-[10px]"></i>
            </p>
            <p className="text-[11px] text-pastel-muted italic mt-0.5 flex items-center justify-center gap-1">
              <span>Dari: Pacar kamu yang paling sayang samaaa kamuuu</span>
              <i className="fa-solid fa-paw text-pastel-darkPink text-[10px]"></i>
            </p>

            <div className="mt-2 text-[10px] text-pastel-darkPink/90 font-medium flex items-center gap-1">
              <i className="fa-solid fa-sparkles text-amber-400"></i>
              <span>Special birthday surprise for you</span>
              <i className="fa-solid fa-sparkles text-amber-400"></i>
            </div>
          </motion.div>

          {/* 3. Kantong Depan Amplop */}
          <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden pointer-events-none">
            <svg viewBox="0 0 280 170" className="w-full h-full" preserveAspectRatio="none">
              <polygon points="0,0 140,95 0,170" fill="#FFE2D4" />
              <polygon points="280,0 140,95 280,170" fill="#FFE2D4" />
              <polygon points="0,170 140,85 280,170" fill="#FFC9B5" />
            </svg>
          </div>

          {/* 4. Penutup Amplop Atas (Flap) & Segel Paw (Tetap tertutup di posisi paling depan z-20 saat awal, membuka 180° ke atas saat diklik) */}
          <div
            className="absolute top-0 left-0 w-full h-[100px] pointer-events-none"
            style={{
              perspective: 1000,
              zIndex: isOpen ? 1 : 20,
            }}
          >
            <motion.div
              initial={false}
              animate={{
                rotateX: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              className="w-full h-full relative"
            >
              <svg viewBox="0 0 280 100" className="w-full h-full drop-shadow-sm" preserveAspectRatio="none">
                <polygon
                  points="0,0 140,100 280,0"
                  fill={isOpen ? '#FFAAA6' : '#FF8DA1'}
                />
              </svg>

              {/* Segel Lilin Paw (Hanya tampil saat amplop tertutup) */}
              {!isOpen && (
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-pastel-darkPink to-rose-500 text-white border-2 border-pink-100 shadow-md flex items-center justify-center text-sm z-30">
                  <i className="fa-solid fa-paw"></i>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Area Teks & Tombol di Bawah (Fixed height agar posisi amplop tidak bergeser) */}
        <div className="mt-3 min-h-[85px] flex flex-col items-center justify-center">
          <div
            className={`transition-opacity duration-300 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <h2 className="text-lg sm:text-xl font-bold text-pastel-darkPink mb-0.5">
              Hai Ina Sayang! <i className="fa-solid fa-heart text-pastel-darkPink"></i>
            </h2>
            <p className="text-xs text-pastel-muted mb-3">
              Aku punya surat untuk pacarku tersayang
            </p>
            <button
              onClick={handleOpenAnimation}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-darkPink text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-300/40 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <span>Buka Kartu Ucapan</span>
              <i className="fa-solid fa-envelope-open-text"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
