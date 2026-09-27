# FrostBite - Distribución B2B de Hielo Gourmet

Frostbite es una plataforma web desarrollada con "React", "Vite" y "Tailwind CSS", orientada al abastecimiento mayorista de hielo gourmet para botillerías, bares, minimarkets y locales gastronómicos (B2B)

## Tecnologías Utilizadas

- "React 18 / Vite:" Estructura basada en componentes y renderizado reactivo.
- "Tailwind CSS:" Diseño responsivo y uso de maquetas de interfaces mediante clases de utilidad.
- "Git & GitHub:" Control de desarrollo a traves de commits de progresivos
- "JavaScript:" Lógica asíncrona simulada con Promises y temporizadores

## Componentes del Proyecto

- `Navbar.jsx`: Barra superior de navegación con contador dinámico de unidades acumuladas mediante props
- `CategoryFilter.jsx`: Filtro para clasificar productos por tipo de formato comercial
- `ProductCard.jsx`: Tarjeta interactiva con visualización de producto, categorías, precio -CL y acciones de compra
- `ProductDetailModal.jsx`: Vista con información detallada y especificaciones de entrega
- `Cart.jsx`: Pedido mayorista con agrupación de productos por cantidad, ajuste de unidades, total calculado, vaciar carrito y confirmación de pedido
- `Footer.jsx`: Pie de página institucional con distribución B2B

## Simulación de API y Asincronia

El catálogo se obtiene a través del módulo `src/data/productos.js` mediante la función `obtenerProductos()`, la cual retorna una `Promise` con un retardo controlado (`setTimeout`) para simular la latencia de una API externa. Los datos son consumidos en el hook `useEffect` del componente principal (`App.jsx`), controlando el ciclo de vida y los estados de carga

## Ejecución en Entorno Local

### Prerrequisitos
- Tener instalado [Node.js](https://nodejs.org/) 
- Gestor de paquetes `npm` (incluido junto con Node.js)
- Tener instalado [Git](https://git-scm.com/).

### Instrucciones Paso a Paso

   **Clonar el repositorio:**
   Descarga una copia local del proyecto en tu máquina:
   
   git clone [https://github.com/jhanhd03/frostbite.git]

   -Acceder al directorio
   cd frostbite
   
   -instalar dependencias
   npm install
   
   -iniciar el servidor local
   npm run dev

   -abrir navegador e ingresar la direccion que nos da la consola ("http://localhost:5173")


