import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import GreetingSection from "../components/layout/GreetingSection";
import Academic from "../components/layout/Academic";
import Learning from "../components/layout/Learning";
import Other from "../components/layout/Other";
import Footer from "../components/layout/Footer";

export default function MainDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#f2f2f2] text-[#333]">

      {/* Header */}
      <Header />
      <div className="h-[50px]"></div> {/* spacer supaya konten tidak tertutup header */}

      {/* Greeting Section */}
      <GreetingSection 
        userName="Mochamad Fahmi Fadillah" 
        subscriptionStatus="berakhir" 
      />

      {/* Status Langganan */}
      <section className="max-w-screen-xl mx-auto px-4 lg:px-6 py-6">
        <article className="bg-white text-black w-full p-4 rounded-xl shadow-md border border-black/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border border-black/10 border-b py-3 gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center text-white text-xs">!</div>
              <p className="text-sm leading-none">
                Langganan telah berakhir. Berlangganan kembali untuk melanjutkan aktivitas belajar Anda.
              </p>
            </div>
            <button className="bg-[#033E5F] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Lanjut Berlangganan
            </button>
          </div>
        </article>
      </section>

      {/* Konten Utama */}
      <section className="max-w-screen-xl mx-auto px-4 lg:px-6 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Academic loading={loading} />
          <Learning loading={loading} />
        </div>

        <Other loading={loading} />

        {/* Aktivitas Lain */}
        <article className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="font-semibold mb-3">Aktivitas Lain</h2>

          {loading ? (
            <div className="animate-pulse h-16 bg-gray-300 rounded-md"></div>
          ) : (
            <p>Belum ada aktivitas.</p>
          )}

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer text-left">
              Telusuri event dari Dicoding
            </button>
            <button className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer text-left">
              Telusuri challenge dari Dicoding
            </button>
            <button className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer md:col-span-2 text-left">
              Telusuri daftar pekerjaan perusahaan ternama
            </button>
          </div>
        </article>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
