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

  // agregar al carrito agrupando por producto
  const agregarProducto = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  //quitar una unidad del producto y borrarlo si llega a 0
  const eliminarUnaUnidad = (productoId) => {
    const productoExistente = carrito.find((item) => item.id === productoId);
    if (productoExistente.cantidad === 1) {
      setCarrito(carrito.filter((item) => item.id !== productoId));
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const confirmarPedido = (total) => {
    alert(`¡Pedido confirmado exitosamente por $${total}!\nNos contactaremos para programar el despacho.`);
    setCarrito([]);
    setMostrarCarrito(false);
  };

  // Cantidad total de bolsas en el pedido para el Navbar
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((prod) => prod.categoria === categoriaSeleccionada);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 1. Navbar con contador total*/}
      <Navbar
        cartCount={totalArticulos}
        onOpenCart={() => setMostrarCarrito(true)}
      />

      {/* 2. Catálogo */}
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

      {/* 3. Detalle */}
      <ProductDetailModal
        producto={productoSeleccionado}
        alCerrar={() => setProductoSeleccionado(null)}
        alAgregar={agregarProducto}
      />

      {/* 4. Carrito con cantidades, total y confirmación */}
      <Cart
        visible={mostrarCarrito}
        alCerrar={() => setMostrarCarrito(false)}
        carrito={carrito}
        alEliminarUno={eliminarUnaUnidad}
        alVaciar={vaciarCarrito}
        alConfirmar={confirmarPedido}
      />
    </div>
  );
}

export default App;