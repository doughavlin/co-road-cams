import { cameras } from "@/lib/cameras";

export default function Home() {
  const timeStamp = Date.now();
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <main className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
          Colorado Road Cameras - Updated: {new Date(timeStamp).toLocaleString()}
        </h1>
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
                  className="w-full h-full object-cover"
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
