import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";
import ProductDetailModal from "./components/ProductDetailModal";
import Cart from "./components/Cart";
import { obtenerProductos } from "./data/productos";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  useEffect(() => {
    obtenerProductos().then((datos) => {
      setProductos(datos);
      setCargando(false);
    });
  }, []);

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? productos
    : productos.filter((prod) => prod.categoria === categoriaSeleccionada);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 1. Navbar */}
      <Navbar 
        cartCount={carrito.length} 
        onOpenCart={() => setMostrarCarrito(true)} 
      />

      {/* 2. Contenido Principal */}
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Catálogo Mayorista de Hielo Gourmet
        </h1>

        <CategoryFilter
          categoriaSeleccionada={categoriaSeleccionada}
          alSeleccionarCategoria={setCategoriaSeleccionada}
        />

        {cargando ? (
          <p className="text-gray-500 font-medium">Cargando catálogo desde el servidor...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productosFiltrados.map((prod) => (
              <ProductCard
                key={prod.id}
                producto={prod}
                agregarProducto={agregarProducto}
                verDetalle={(p) => setProductoSeleccionado(p)}
              />
            ))}
          </div>
        )}
      </main>

      {/* 3. Modal Detalle */}
      <ProductDetailModal
        producto={productoSeleccionado}
        alCerrar={() => setProductoSeleccionado(null)}
        alAgregar={agregarProducto}
      />

      {/* 4. Carrito */}
      <Cart
        visible={mostrarCarrito}
        alCerrar={() => setMostrarCarrito(false)}
        carrito={carrito}
        alVaciar={vaciarCarrito}
      />
    </div>
  );
}

export default App;