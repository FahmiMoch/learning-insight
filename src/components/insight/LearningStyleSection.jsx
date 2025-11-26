import React from "react";

function TypeCard({ title, icon, desc }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow flex gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </article>
  );
}

export default function LearningStyleSection() {
  const types = [
    {
      title: "Fast Learner",
      icon: "⚡",
      desc: "Kamu menyelesaikan materi dengan cepat dan mampu memahami konsep secara singkat.",
    },
    {
      title: "Consistent Learner",
      icon: "📆",
      desc: "Pola belajarmu stabil dan kamu mempertahankan ritme tiap minggu.",
    },
    {
      title: "Reflective Learner",
      icon: "🧠",
      desc: "Kamu lebih fokus pada pemahaman mendalam dan refleksi.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-10 px-6 space-y-4">
      {types.map((t, idx) => (
        <TypeCard key={idx} {...t} />
      ))}
    </section>
  );
}
