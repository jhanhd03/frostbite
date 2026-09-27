function ProductDetailModal({ producto, alCerrar, alAgregar }) {
  if (!producto) return null;

  //dinero en -CL
  const precioChileno = producto.precio.toLocaleString("es-CL");

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={alCerrar}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={alCerrar}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 font-bold"
        >
          ✕
        </button>

        <span className="text-xs uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
          {producto.categoria}
        </span>

        <h2 className="text-xl font-bold text-gray-900 mt-2 mb-1">
          {producto.nombre}
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          {producto.descripcion}
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded p-3 mb-4 text-xs text-gray-700 space-y-1">
          <p><strong>Formato:</strong> {producto.formato}</p>
          <p><strong>Disponibilidad:</strong> Entrega inmediata</p>
        </div>

        <div className="flex items-center justify-between border-t pt-3 mb-4">
          <span className="text-xs text-gray-500">Precio mayorista</span>
          <span className="text-xl font-black text-gray-900">${precioChileno}</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={alCerrar}
            className="bg-gray-200 text-gray-800 text-xs px-3 py-2 rounded hover:bg-gray-300 font-medium"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              alAgregar(producto);
              alCerrar();
            }}
            className="bg-blue-600 text-white text-xs px-4 py-2 rounded flex-1 font-bold hover:bg-blue-700 transition-colors"
          >
            + Agregar al pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
