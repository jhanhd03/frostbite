function Cart({ visible, alCerrar, carrito, alEliminarUno, alVaciar, alConfirmar }) {
  if (!visible) return null;

  // Calculamos el monto total acumulado considerando cantidades
  const total = carrito.reduce(
    (acumulado, item) => acumulado + item.precio * item.cantidad,
    0
  );
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        {/* Cabecera */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">🛒 Mi Pedido</h2>
          <button onClick={alCerrar} className="text-gray-500 font-bold hover:text-gray-800">
            ✕
          </button>
        </div>
        {/* Lista de productos agrupados */}
        {carrito.length === 0 ? (
          <p className="text-sm text-gray-500 mb-4 text-center py-4">
            No hay productos en el pedido.
          </p>
        ) : (
          <div className="max-h-60 overflow-y-auto mb-4 divide-y">
            {carrito.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2 text-sm">
                <div>
                  <p className="font-semibold">{item.nombre}</p>
                  <p className="text-xs text-gray-500">
                    ${item.precio} c/u &times; {item.cantidad} = <strong>${item.precio * item.cantidad}</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs">
                    x{item.cantidad}
                  </span>
                  <button
                    onClick={() => alEliminarUno(item.id)}
                    className="bg-gray-200 hover:bg-red-100 hover:text-red-600 text-gray-700 text-xs px-2 py-1 rounded font-bold"
                    title="Quitar una unidad"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Total a pagar */}
        <div className="border-t pt-3 flex justify-between items-center mb-4">
          <span className="font-bold text-gray-700">Total a Pagar:</span>
          <span className="text-xl font-black text-blue-600">${total}</span>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2">
          <button
            onClick={alCerrar}
            className="bg-gray-200 text-gray-800 text-xs px-3 py-2 rounded hover:bg-gray-300"
          >
            Cerrar
          </button>
          {carrito.length > 0 && (
            <>
              <button
                onClick={alVaciar}
                className="bg-red-500 text-white text-xs px-3 py-2 rounded hover:bg-red-600"
              >
                Vaciar Pedido
              </button>
              <button
                onClick={() => alConfirmar(total)}
                className="bg-green-600 text-white text-xs px-4 py-2 rounded flex-1 font-bold hover:bg-green-700"
              >
                Confirmar Pedido
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cart;