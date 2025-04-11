import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([
      {
        id: 1,
        title: "Departamento en Palermo",
        description: "2 habitaciones, baño, cocina, pileta, garage",
        image: "/images/prop1.jpg",
        price: "$350.000/mes"
      },
      {
        id: 2,
        title: "Casa en San Isidro",
        description: "3 habitaciones, 2 baños, patio, garage",
        image: "/images/prop2.jpg",
        price: "$550.000/mes"
      }
    ]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">ABIG - Alquileres Inteligentes</h1>
        <p className="text-center text-gray-600">Buscá propiedades según tus necesidades</p>
      </header>

      <div className="flex gap-2 mb-6">
        <input
          className="border px-4 py-2 rounded w-full"
          placeholder="Ej: 2 habitaciones en Palermo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">Buscar</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((prop) => (
          <div key={prop.id} className="border rounded overflow-hidden shadow">
            <img src={prop.image} alt={prop.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">{prop.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{prop.description}</p>
              <p className="font-bold">{prop.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
