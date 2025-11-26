// src/components/insight/ChartSection.jsx
import React from "react";

export default function ChartSection({ data = [], range, setRange }) {
  const width = 800;
  const height = 200;

  // Pastikan data tidak kosong
  const safeData = data.length > 0 ? data : [0];

  // Max value minimal 1 untuk menghindari pembagian NaN
  const maxValue = Math.max(...safeData, 1);

  // Step untuk posisi x
  const step = safeData.length > 1 ? width / (safeData.length - 1) : width / 2;

  // Hitung titik polyline
  const points = safeData
    .map((v, i) => `${i * step},${height - (v / maxValue) * height}`)
    .join(" ");

  return (
    <section className="max-w-6xl mx-auto bg-white p-6 rounded-xl mt-10 shadow">
      <header>
        <h2 className="font-semibold mb-1">Kegiatan Pembelajaran</h2>
        <p className="text-sm text-gray-600 mb-4">Aktivitas Penyelesaian Materi Per Hari</p>
      </header>

      {/* Range Buttons */}
      <div className="flex gap-3 mb-5">
        {[7, 14, 30].map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-3 py-1 rounded-lg border ${
              range === r
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {r} Hari
          </button>
        ))}
      </div>

      {/* SVG Chart */}
      <figure className="overflow-x-auto">
        <svg width={width} height={height}>
          <polyline fill="none" stroke="#2563eb" strokeWidth="3" points={points} />
          {safeData.map((v, i) => (
            <circle
              key={i}
              cx={i * step}
              cy={height - (v / maxValue) * height}
              r="4"
              fill="#2563eb"
            />
          ))}
        </svg>
      </figure>
    </section>
  );
}
