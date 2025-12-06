"use client";
import { cameras } from "@/lib/cameras";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeStamp, setTimeStamp] = useState(0);

  useEffect(() => {
    setTimeStamp(Date.now());
  }, []);



  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <main className="w-full max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
          Colorado Road Cameras - Updated: {new Date(timeStamp).toLocaleString()}
        </h1>

        {/* Floating Refresh button: fixed to top-right of viewport */}
        <div className="fixed top-6 right-6 z-50">
          <button
            type="button"
            onClick={() => {
              const url = new URL(window.location.href);
              url.searchParams.set('LSCWP_CTRL', 'before_optm');
              url.searchParams.set('nocache', timeStamp.toString());
              window.location.href = url.toString();
            }}
            title="Reload page and refresh camera images"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameras.map((camera) => (
            <div
              key={camera.name}
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48 bg-gray-300 dark:bg-gray-700">
                <img
                  src={`${camera.url}?${timeStamp}`}
                  alt={camera.name}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {camera.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
