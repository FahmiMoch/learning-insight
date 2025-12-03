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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      ),
      desc: "Kamu menyelesaikan materi dengan cepat dan mampu memahami konsep secara singkat.",
    },
    {
      title: "Consistent Learner",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      desc: "Pola belajarmu stabil dan kamu mempertahankan ritme tiap minggu.",
    },
    {
      title: "Reflective Learner",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12s3.694 8.25 8.25 8.25zm0 0v-3m0-10.5v3m6.364 3H15m-6 0H5.636"
          />
        </svg>
      ),
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
