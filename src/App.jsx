import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundDecor from './components/BackgroundDecor';
import MusicPlayer from './components/MusicPlayer';
import EnvelopeModal from './components/EnvelopeModal';
import HeroCard from './components/HeroCard';
import CakeCard from './components/CakeCard';
import BalloonCard from './components/BalloonCard';
import GalleryCard from './components/GalleryCard';
import LetterCard from './components/LetterCard';
import HugCard from './components/HugCard';
import { sounds } from './utils/audio';

const TOTAL_CARDS = 6;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 320 : -320,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 320 : -320,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    sounds.playPop();
    const nextIndex = activeCard + newDirection;
    if (nextIndex >= 0 && nextIndex < TOTAL_CARDS) {
      setDirection(newDirection);
      setActiveCard(nextIndex);
    }
  };

  const jumpToCard = (index) => {
    if (index === activeCard) return;
    sounds.playPop();
    setDirection(index > activeCard ? 1 : -1);
    setActiveCard(index);
  };

  const renderCard = () => {
    switch (activeCard) {
      case 0:
        return <HeroCard onNext={() => paginate(1)} />;
      case 1:
        return <CakeCard />;
      case 2:
        return <BalloonCard onNext={() => paginate(1)} />;
      case 3:
        return <GalleryCard />;
      case 4:
        return <LetterCard />;
      case 5:
        return <HugCard />;
      default:
        return <HeroCard onNext={() => paginate(1)} />;
    }
  };

  return (
    <div className="h-[100dvh] w-full max-w-full overflow-hidden flex flex-col justify-between items-center p-2 sm:p-4 select-none relative font-fredoka">
      {/* Decorative Floating Cats, Paws & Hearts */}
      <BackgroundDecor />

      {/* Top Header: Ghina's 19th Birthday Badge & Counter + Music Player */}
      <header className="z-10 w-full max-w-[430px] sm:max-w-[560px] md:max-w-[660px] lg:max-w-[720px] flex items-center justify-between px-2 sm:px-3 pt-1 sm:pt-2 gap-2 flex-shrink-0">
        {/* Left: Birthday & Counter Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-sm border border-pink-100 shadow-xs flex-shrink-0">
          <i className="fa-solid fa-heart text-pastel-darkPink text-xs animate-pulse"></i>
          <span className="text-[11px] sm:text-xs font-bold text-pastel-dark whitespace-nowrap">Ghina's 19th Birthday</span>
          <i className="fa-solid fa-cat text-pastel-darkPink text-xs"></i>
          <span className="w-1 h-1 rounded-full bg-pink-300"></span>
          <span className="text-[10px] sm:text-[11px] font-bold text-pastel-muted whitespace-nowrap">
            {activeCard + 1} / {TOTAL_CARDS}
          </span>
        </div>

        {/* Right: Music Player (Sejajar dan proporsional di semua device) */}
        <MusicPlayer autoPlayTrigger={isOpened} />
      </header>

      {/* Opening Envelope Modal */}
      {!isOpened && (
        <EnvelopeModal
          onOpen={() => {
            setIsOpened(true);
            window.scrollTo(0, 0);
          }}
        />
      )}

      {/* Main Interactive Card Display Area - Menyesuaikan Secara Luwes di HP, Tablet & Laptop */}
      <main className="flex-1 w-full max-w-[430px] sm:max-w-[560px] md:max-w-[660px] lg:max-w-[720px] min-h-0 flex items-center justify-center relative my-1 sm:my-2 z-10 px-1 sm:px-2">
        <div className="w-full h-full max-h-[85dvh] sm:max-h-[87dvh] md:max-h-[89dvh] bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-pink-100/90 flex flex-col overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeCard}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.35}
              onDragEnd={(e, { offset, velocity }) => {
                const swipePower = Math.abs(offset.x) * velocity.x;
                if (offset.x < -40 || swipePower < -6000) {
                  // Swipe Left -> Next
                  if (activeCard < TOTAL_CARDS - 1) {
                    paginate(1);
                  }
                } else if (offset.x > 40 || swipePower > 6000) {
                  // Swipe Right -> Prev
                  if (activeCard > 0) {
                    paginate(-1);
                  }
                }
              }}
              className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
            >
              {renderCard()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Area (Navigasi Minimalis: Prev, Dots, Next) */}
      <footer className="z-10 w-full max-w-sm flex items-center justify-center pb-1 sm:pb-2">
        {/* Navigation Controls: Prev, Dots, Next */}
        <div className="flex items-center justify-center gap-3">
          {/* Prev Arrow */}
          <button
            onClick={() => paginate(-1)}
            disabled={activeCard === 0}
            className={`w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 shadow-xs flex items-center justify-center text-xs font-bold transition-all ${
              activeCard === 0
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'text-pastel-darkPink hover:bg-white active:scale-95'
            }`}
            aria-label="Previous card"
          >
            <i className="fa-solid fa-chevron-left text-[10px]"></i>
          </button>

          {/* Minimal Pagination Dots */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 shadow-xs">
            {Array.from({ length: TOTAL_CARDS }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToCard(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeCard
                    ? 'w-6 h-2 bg-pastel-darkPink shadow-xs'
                    : 'w-2 h-2 bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={() => paginate(1)}
            disabled={activeCard === TOTAL_CARDS - 1}
            className={`w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm border border-pink-100 shadow-xs flex items-center justify-center text-xs font-bold transition-all ${
              activeCard === TOTAL_CARDS - 1
                ? 'opacity-30 cursor-not-allowed text-gray-400'
                : 'text-pastel-darkPink hover:bg-white active:scale-95'
            }`}
            aria-label="Next card"
          >
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}
