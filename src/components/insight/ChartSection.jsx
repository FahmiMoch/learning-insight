import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartSection({ range, setRange }) {
  // Manual Data (Strava vibe)
  const baseData = {
    7: [12, 18, 14, 22, 17, 19, 8],
    14: [8, 10, 12, 15, 14, 13, 12, 18, 14, 22, 17, 19, 8, 10],
    30: Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * (25 - 8 + 1)) + 8
    ),
  };

  // Custom label 7 hari → Senin–Minggu
  const daysLabel = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

  // data (tetap pake index)
  const data = useMemo(() => {
    const arr = baseData[range];
  
    // Ambil hanya 7 titik terakhir supaya spacing chart selalu sama
    const sliced = arr.slice(-7);
  
    return sliced.map((value, i) => ({
      index: String(i),
      value,
      dayLabel: daysLabel[i], // tetap 7 hari, tidak modulo
    }));
  }, [range]);
  

  

  return (
    <section className="max-w-6xl mx-auto bg-white p-6 rounded-xl mt-10 shadow">
      <header>
        <h2 className="font-semibold mb-1">Kegiatan Pembelajaran</h2>
        <p className="text-sm text-gray-600 mb-4">
          Aktivitas Penyelesaian Materi Per Hari
        </p>
      </header>

      {/* Range Buttons */}
      <div className="flex gap-3 mb-5 justify-end">
        {[7, 14, 30].map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-3 py-1 rounded-lg border transition ${
              range === r
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {r} Hari
          </button>
        ))}
      </div>

      <figure className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 15, left: -10 }}>
            <CartesianGrid
              stroke="#e5e5e5"
              strokeDasharray="3 3"
              vertical={false}
            />

<XAxis
  dataKey="index"
  type="category"
  scale="point"
  padding={{ left: -12, right: 20 }}
  ticks={["0","1","2","3","4","5","6"]}
  tickFormatter={(i) => daysLabel[Number(i) % 7]}
  interval={0}
  tick={{ fontSize: 12, fill: "#666", dy: 10 }}   // <--- geser ke bawah
  tickLine={false}
  axisLine={false}
/>




            {/* --------------------------------------- */}

            <YAxis
              tick={{ fontSize: 12, fill: "#666" }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#0052D5"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 6, fill: "#0052D5" }}
              style={{
                filter: "drop-shadow(0px 0px 5px rgba(0, 82, 213, 0.5))",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </figure>
    </section>
  );
}
