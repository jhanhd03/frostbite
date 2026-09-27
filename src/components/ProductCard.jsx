function ProductCard({ producto, agregarProducto, verDetalle }) {
  // que aparezca el precio en cl
  const precioChileno = producto.precio.toLocaleString("es-CL");

  return (
    <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
            {producto.categoria}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {producto.formato}
          </span>
        </div>

        <h3 
          className="text-lg font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => verDetalle(producto)}
        >
          {producto.nombre}
        </h3>
        
        <p className="text-xs text-gray-500 mt-1 mb-4 line-clamp-2">
          {producto.descripcion}
        </p>
      </div>

      <div>
        <div className="mb-4">
          <span className="text-xs text-gray-400 block">Precio por unidad</span>
          <span className="text-xl font-black text-gray-900">${precioChileno}</span>
        </div>

        <div className="flex gap-2">
          <button
            className="bg-gray-100 text-gray-700 text-xs px-3 py-2 rounded font-medium hover:bg-gray-200 transition-colors"
            onClick={() => verDetalle(producto)}
          >
            Detalle
          </button>
          <button
            className="bg-blue-600 text-white text-xs px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors flex-1"
            onClick={() => agregarProducto(producto)}
          >
            + Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;