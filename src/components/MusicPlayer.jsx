import React, { useRef, useState, useEffect } from 'react';

export default function MusicPlayer({ autoPlayTrigger }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Autoplay blocked by browser policy:", e);
      });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.log);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/here-with-me.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        className="relative z-10 bg-white/85 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full border border-pink-100 shadow-xs flex items-center gap-1.5 sm:gap-2 transition-all hover:bg-white active:scale-95 flex-shrink-0 cursor-pointer"
        title={isPlaying ? "Jeda Musik" : "Putar Musik"}
        aria-label="Toggle Musik"
      >
        <span className={`text-pastel-darkPink text-sm sm:text-base leading-none ${isPlaying ? 'animate-spin-disc' : ''}`}>
          <i className="fa-solid fa-compact-disc"></i>
        </span>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-bold text-pastel-darkPink leading-tight whitespace-nowrap">Here With Me</span>
          <span className="text-[9px] text-pastel-muted leading-tight flex items-center gap-1 whitespace-nowrap">
            {isPlaying ? (
              <>
                <span>Memutar</span>
                <i className="fa-solid fa-music text-[8px] text-pastel-darkPink"></i>
              </>
            ) : (
              'Putar'
            )}
          </span>
        </div>
        <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-pastel-pink text-white flex items-center justify-center text-[9px] shadow-2xs">
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </span>
      </button>
    </>
  );
}
