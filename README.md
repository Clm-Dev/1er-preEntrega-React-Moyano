markdown# 🎮 Gamer World - Tienda de Componentes de Computación

Aplicación interactiva desarrollada en **React** que simula un catálogo en línea para la compra de hardware. El proyecto cuenta con una estructura de carpetas propia y navegación fluida sin recargas de página.

---

## 🛠️ Tecnologías utilizadas

*   **React 18**
*   **Vite**
*   **React Router Dom** (Para la navegación)

---

## 📂 Estructura de carpetas (Explorador de Window)

📁 mi-proyecto-gamer
 ├── 📁 public
 │    └── 📁 datos
 │         └── 📄 productos.json
 ├── 📁 src
 │    ├── 📁 components
 │    │    ├── 📄 Footer.jsx
 │    │    ...
 │    └── 📁 views
 │         ├── 📄 MainLayout.jsx
 │         ...
 ├── 📄 index.html
 ├── 📄 package.json
 └── 📄 README.md   

 ## 📋 Cumplimiento de consignas

1.  **Estructura:** Componente `MainLayout.jsx` que incluye cabecera, navegación y un pie de página con información de la empresa y las tarjetas de 3 personas del equipo.
2.  **Catálogo:** Carga de productos desde el archivo local `productos.json` usando `fetch` y `useEffect`. Los datos se envían por propiedades al componente reutilizable `ProductCard.jsx`.
3.  **Rutas:** Navegación armada con `react-router-dom` usando enlaces que no recargan la página para las secciones: `/`, `/productos`, `/producto/:id` y `/carrito`.

---

## 🚀 Cómo ejecutar el proyecto

1. Instalar los paquetes de npm:
   ```bash
   npm install
   ```
2. Iniciar el servidor local:
   ```bash
   npm run dev
   ```