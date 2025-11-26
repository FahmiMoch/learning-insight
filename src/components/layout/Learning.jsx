import React from "react";

export default function Learning({ loading }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="font-semibold mb-3 flex items-center gap-2">
        <span className="w-5 h-5 bg-gray-200 rounded-md inline-block"></span>
        Aktivitas Belajar
      </h2>
      <div className="h-px bg-gray-200 w-full mb-4"></div>

      {loading ? (
        <div className="space-y-3">
          <div className="animate-pulse h-8 bg-gray-300 rounded"></div>
          <div className="animate-pulse h-8 bg-gray-300 rounded"></div>
          <div className="animate-pulse h-8 bg-gray-300 rounded"></div>
          <div className="animate-pulse h-8 bg-gray-300 rounded"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-200 p-4 rounded text-sm text-gray-700 w-[575px] h-[60px]">
            Sedang dipelajari
          </div>
          <div className="bg-gray-200 p-4 rounded text-sm text-gray-700 w-[575px] h-[60px]">
            Sedang dipelajari
          </div>
          <div className="bg-gray-200 p-4 rounded text-sm text-gray-700 w-[575px] h-[60px]">
            Sedang dipelajari
          </div>
          <div className="bg-gray-200 p-4 rounded text-sm text-gray-700 w-[575px] h-[60px]">
            Sedang dipelajari
          </div>
        </div>
      )}
    </article>
  );
}
