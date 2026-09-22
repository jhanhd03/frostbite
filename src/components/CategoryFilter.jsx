function CategoryFilter({ categoriaSeleccionada, alSeleccionarCategoria }) {
  const categorias = ["Todos", "Bolsas Individuales", "Bares y Restaurantes", "Packs Mayoristas"];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => alSeleccionarCategoria(cat)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            categoriaSeleccionada === cat
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-700 border hover:bg-gray-50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;