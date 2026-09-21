const hielos = [
  { 
    id: 1, nombre: "Hielo Gourmet Premium 1 Kg", precio: 600, categoria: "Bolsas Individuales", formato: "1 Kg",descripcion: "Cubo macizo, puro y de alta densidad para botillerías y minimarkets."
  },
  { 
    id: 2, nombre: "Hielo Gourmet Premium 2 Kg", precio: 1200, categoria: "Bolsas Individuales", formato: "2 Kg", descripcion: "Formato estándar para congeladores comerciales y venta al paso."
  },
  { 
    id: 3, nombre: "Hielo Gourmet Hostelero 5 Kg", precio: 3000, categoria: "Bares y Restaurantes", formato: "5 Kg", descripcion: "Bolsa de alto rendimiento diseñada para coctelería sin aguar las bebidas."
  },
  { 
    id: 4, nombre: "Pack Mayorista Botillería (10x2 Kg)", precio: 12000, categoria: "Packs Mayoristas", formato: "Fardo 20 Kg", descripcion: "Fardo sellado para reposición semanal en cámaras y congeladores locales."
  },
  { 
    id: 5, nombre: "Pack Restaurante & Pub (5x5 Kg)", precio: 14000, categoria: "Packs Mayoristas", formato: "Fardo 25 Kg", descripcion: "Abastecimiento para locales gastronómicos con entrega programada."
  },
  { 
    id: 6, nombre: "Hielo Frappé Triturado 3 Kg", precio: 2900, categoria: "Bares y Restaurantes", formato: "3 Kg", descripcion: "Hielo picado especial para coctelería tiki, mojitos y tragos preparados."
  }
];

// funcion que simula el pedir los datos a un servidor
export function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hielos); 
    }, 1000);
  });
}