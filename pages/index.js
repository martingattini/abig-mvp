import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // Simulación de búsqueda
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
        <Input
          placeholder="Ej: 2 habitaciones en Palermo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((prop) => (
          <Card key={prop.id}>
            <img src={prop.image} alt={prop.title} className="rounded-t-xl w-full h-48 object-cover" />
            <CardContent>
              <h2 className="font-semibold text-lg mb-1">{prop.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{prop.description}</p>
              <p className="font-bold">{prop.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
