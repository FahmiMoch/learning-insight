// src/components/insight/SummarySection.jsx
import React from "react";

/* Reusable SummaryCard */
function SummaryCard({ title, value, icon }) {
  return (
    <article className="bg-[#1c4465] text-white p-5 rounded-xl shadow">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </article>
  );
}

export default function SummarySection() {
  const summaries = [
    { title: "Kecepatan Belajar", value: "10 Materi", icon: "⚡" },
    { title: "Konsistensi", value: "6 Hari Aktif", icon: "📅" },
    { title: "Rata - Rata", value: "90 Menit", icon: "⏱️" },
    { title: "Evaluasi", value: "90 / A", icon: "📊" },
  ];

  return (
    <section className="w-full mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {summaries.map((item, idx) => (
            <li key={idx}>
              <SummaryCard title={item.title} value={item.value} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
