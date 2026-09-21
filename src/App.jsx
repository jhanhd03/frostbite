import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { obtenerProductos } from "./data/productos";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Simulación de petición asíncrona al cargar el componente
  useEffect(() => {
    obtenerProductos().then((datos) => {
      setProductos(datos);
      setCargando(false);
    });
  }, []);

  // Función para sumar productos al carrito
  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para ver detalle básico
  const verDetalle = (producto) => {
    alert(`Detalle: ${producto.nombre}\n\n${producto.descripcion}\nFormato: ${producto.formato}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 1. Barra de navegación con props */}
      <Navbar 
        cartCount={carrito.length} 
        onOpenCart={() => alert(`Total de pedidos acumulados: ${carrito.length}`)} 
      />

      {/* 2. Contenedor principal */}
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Catálogo Mayorista de Hielo Gourmet
        </h1>

        {cargando ? (
          <p className="text-gray-500 font-medium">Cargando catálogo desde el servidor...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productos.map((prod) => (
              <ProductCard
                key={prod.id}
                producto={prod}
                agregarProducto={agregarProducto}
                verDetalle={verDetalle}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;