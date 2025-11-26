import React from "react";

export default function GreetingSection({ userName = "User", subscriptionStatus = "berakhir" }) {
  return (
    <section className="w-full bg-gradient-to-r from-[#0c3c60] to-[#003f72] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <h1 className="text-2xl font-semibold">Selamat datang {userName}!</h1>
        <p className="text-sm opacity-90">Semoga aktivitas belajarmu menyenangkan.</p>

        {/* Status Langganan */}
        <article className="bg-white text-black mt-6 w-full p-4 rounded-xl shadow-md border border-black/10">
          <h2 className="font-bold mb-2">Status Langganan</h2>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between 
            border border-black/10 border-b py-3 px-5 gap-4 md:gap-0">
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 rounded-md flex items-center justify-center text-white text-xs"></div>
              <p className="text-sm leading-normal">
                Langganan telah {subscriptionStatus}. Berlangganan kembali untuk melanjutkan aktivitas belajar Anda.
              </p>
            </div>

            <button className="bg-[#033E5F] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Lanjut Berlangganan
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
