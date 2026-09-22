function Cart({ visible, alCerrar, carrito, alVaciar }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">🛒 Mi Pedido</h2>
          <button onClick={alCerrar} className="text-gray-500 font-bold">✕</button>
        </div>

        {carrito.length === 0 ? (
          <p className="text-sm text-gray-500 mb-4">No hay productos en el pedido.</p>
        ) : (
          <div className="mb-4">
            {carrito.map((item, index) => (
              <div key={index} className="flex justify-between text-sm py-1 border-b">
                <span>{item.nombre}</span>
                <span className="font-semibold">${item.precio}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <button
            onClick={alCerrar}
            className="bg-gray-300 text-gray-800 text-xs px-3 py-2 rounded"
          >
            Cerrar
          </button>
          {carrito.length > 0 && (
            <button
              onClick={alVaciar}
              className="bg-red-500 text-white text-xs px-3 py-2 rounded flex-1 font-bold"
            >
              Vaciar Pedido
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;