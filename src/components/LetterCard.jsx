import React from 'react';

export default function LetterCard() {
  return (
    <div className="flex flex-col items-center justify-between h-full pt-2 sm:pt-4 pb-1.5 px-2 sm:px-4 text-center select-none">
      {/* Pemberitahuan Pengingat Scroll Agar Membaca Seluruh Surat */}
      <div className="shrink-0 pt-0.5 mb-1.5 sm:mb-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pastel-pink/20 text-pastel-darkPink font-semibold text-[11px] sm:text-xs md:text-sm border border-pastel-pink/40 shadow-xs">
          <i className="fa-solid fa-circle-down text-pastel-darkPink text-xs sm:text-sm animate-bounce"></i>
          <span>Jangan lupa scroll ke bawah sampai habis yaa!</span>
          <i className="fa-solid fa-heart text-pastel-darkPink text-[10px] sm:text-xs"></i>
        </span>
      </div>

      {/* Letter Parchment Container (Menyesuaikan lebar layar & tetap lapang) */}
      <div className="flex-1 w-full max-w-sm sm:max-w-xl md:max-w-2xl bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 shadow-md border border-amber-100 relative text-left flex flex-col overflow-hidden min-h-0 mb-1.5">
        {/* Salutation */}
        <div className="mb-2 sm:mb-3 shrink-0">
          <p className="text-xs sm:text-base font-bold text-pastel-dark flex items-center gap-1.5">
            <span>Dearest Ghina Navisa,</span>
            <i className="fa-solid fa-heart text-pastel-darkPink text-xs sm:text-sm"></i>
          </p>
        </div>

        {/* Scrollable Letter Content */}
        <div className="flex-1 overflow-y-auto pr-2 text-xs sm:text-sm md:text-[15px] text-[#4A3E3D] leading-relaxed space-y-2.5 sm:space-y-3.5 custom-scrollbar font-sans select-text min-h-0">
          <p>
            Happy birthday sayanggkuu! Semoga dengan bertambahnya usiamu, semakin sempurna juga imanmu, rajin ibadahnya, selalu diberi kesehatan sama yang Mahakuasa, panjang umur, selalu bahagia, berbakti terus sama orangtua, serta segala doa dan cita-cita yang kamu inginkan bisa terwujud dan dimudahkan dalam segala urusan. Aamiin.
          </p>

          <p>
            Yeyeyy sekarang kamuu ulang tahun sayangg! Sekarang kamu semakin dewasa yang dimana kamu pasti tahu yang terbaik maupun yang gak buat diri kamuu. Harus lebih dewasa dari sebelumnya yaaa, jangan pernah capek buat perbaiki diri jadi lebih baik lagi.
          </p>

          <p>
            Semangat terus buat kejar semua keinginan kamu, kamu pasti bisa sayangg! Jangan pernah takut gagal yaa, aku selalu dukung kamu dan support kamu sayang. Jangan capek yaa sayangg! Semangat terus, aku selalu ada di samping kamu, selalu rendah hati, jadi anak baik ya sayangg, selalu sayang sama keluarga yaa, jangan lupa untuk selalu bersyukur yaa sayaaaang. Semoga apapun yang kamu lakukan hari ini dan hari berikutnya selalu diberi kelancaran serta keselamatan, Aamiin.
          </p>

          <p>
            Maaf gabisa selalu ada di samping kamu, walaupun terhalang jarak, aku selalu berdoa agar kamu dalam lindungan Allah. Semoga aku bisa nemenin kamu di ulang tahun yang akan datang di tahun berikutnya yaa sayangg, Aamiin ya Rabbal Alamin.
          </p>

          {/* Signature & Stamp */}
          <div className="pt-3 pb-1 flex flex-col items-end">
            <p className="text-[11px] sm:text-xs text-pastel-muted italic">Dengan segenap rasa sayang,</p>
            <p className="font-bold text-xs sm:text-sm text-pastel-darkPink mt-0.5 flex items-center gap-1">
              Pipan <i className="fa-solid fa-paw text-[11px]"></i>
            </p>

            {/* Cute Postcard Stamp Decor (Dipindahkan ke bawah tulisan Pipan) */}
            <div className="mt-2 w-10 sm:w-12 h-12 sm:h-14 bg-pink-50 border-2 border-dashed border-pastel-pink rounded-md flex flex-col items-center justify-center -rotate-3 shadow-xs">
              <i className="fa-solid fa-cat text-pastel-darkPink text-xs sm:text-sm"></i>
              <span className="text-[8px] sm:text-[9px] font-bold text-pastel-darkPink mt-0.5">Inaaa 💖</span>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe Hint Footer */}
      <div className="pb-0.5 text-[11px] text-pastel-darkPink flex items-center justify-center gap-1.5 opacity-85 select-none shrink-0">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50/80 border border-pink-200/60 shadow-xs animate-swipe-hint">
          <i className="fa-solid fa-angles-left text-[9px] text-pastel-darkPink"></i>
          <span className="font-medium text-pastel-dark">Geser layar untuk lanjut</span>
          <i className="fa-solid fa-angles-right text-[9px] text-pastel-darkPink"></i>
        </span>
      </div>
    </div>
  );
}
