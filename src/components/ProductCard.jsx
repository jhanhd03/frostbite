function ProductCard({ producto, agregarProducto, verDetalle }) {
  return (
    <div className="bg-white p-4 border rounded shadow-sm flex flex-col justify-between">
      <div>
        <h3 
          className="text-lg font-bold cursor-pointer hover:text-blue-600"
          onClick={() => verDetalle(producto)}
        >
          {producto.nombre}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{producto.categoria}</p>
        <p className="mb-1 text-gray-700 font-semibold">Precio: ${producto.precio}</p>
        <p className="text-xs text-gray-500 mb-4">Formato: {producto.formato}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-gray-200 text-gray-800 text-xs px-3 py-2 rounded hover:bg-gray-300"
          onClick={() => verDetalle(producto)}
        >
          Detalle
        </button>
        <button
          className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600 flex-1 font-bold"
          onClick={() => agregarProducto(producto)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;