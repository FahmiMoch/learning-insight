// src/components/insight/Report.jsx
import React from "react";

export default function Report() {
  return (
    <section className="bg-gradient-to-r from-[#003b63] to-[#005a94] text-white p-8 rounded-b-xl">
      <header
        className="
          max-w-6xl mx-auto
          border border-white/30 
          rounded-xl p-6 
          flex flex-col md:flex-row 
          justify-between 
          items-start md:items-center 
          gap-6
        "
      >
        {/* Info User */}
        <article>
  <h1 className="text-3xl font-semibold">Laporan Mingguan</h1>
  <p className="mt-2 text-lg">Halo, Mochamad Fahmi</p>

  <p className="mt-1 flex items-center gap-2 text-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>

    <span>Fast Learner</span>
  </p>

  <p className="mt-3 text-sm opacity-90">
    Belajarmu sangat cepat, jangan lupa dibaca ulang ya!
  </p>
</article>


        {/* Info Statistik */}
        <aside className="bg-white/20 backdrop-blur p-4 rounded-xl w-40 text-center border border-white/30">
          <p className="text-sm">12 jam belajar</p>
        </aside>
      </header>
    </section>
  );
}
