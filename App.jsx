import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">React Web Sayfası</h1>
      <p className="text-lg mb-4">Butona tıklayarak sayacı artırabilirsiniz.</p>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <p className="text-2xl font-semibold">Sayaç: {count}</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Artır
        </button>
      </div>
    </div>
  );
}
