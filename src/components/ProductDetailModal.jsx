function ProductDetailModal({ producto, alCerrar, alAgregar }) {
  if (!producto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
        <p className="text-sm text-gray-500 mb-2">{producto.categoria}</p>
        <p className="text-sm mb-4">{producto.descripcion}</p>
        <p className="text-sm mb-4"><strong>Formato:</strong> {producto.formato}</p>
        <p className="text-lg font-bold text-blue-600 mb-4">Precio: ${producto.precio}</p>

        <div className="flex gap-2">
          <button
            onClick={alCerrar}
            className="bg-gray-300 text-gray-800 text-xs px-4 py-2 rounded"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              alAgregar(producto);
              alCerrar();
            }}
            className="bg-blue-500 text-white text-xs px-4 py-2 rounded flex-1 font-bold"
          >
            Agregar al pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;