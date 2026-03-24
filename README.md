# 🌍 WorldExplorer App

> Mini aplicación web desarrollada con **Next.js** y **TailwindCSS** como parte del Evento Evaluativo 3.

---

## 📋 Descripción

**WorldExplorer** es una aplicación web que permite explorar información de países y usuarios del mundo de forma dinámica e interactiva. El usuario puede navegar entre una página de inicio informativa y una página de funcionalidad donde se consumen datos en tiempo real desde APIs públicas.

## 🚀 ¿Qué problema resuelve?

Centraliza en un solo lugar información útil sobre países del mundo y usuarios ficticios, permitiendo explorar, filtrar y visualizar datos de forma clara y moderna, sin necesidad de navegar entre múltiples sitios web.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| [Next.js](https://nextjs.org/) | Framework React para SSR y navegación |
| [React](https://react.dev/) | Librería principal de UI |
| [TailwindCSS](https://tailwindcss.com/) | Estilos y diseño responsive |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | API de usuarios y posts |
| [REST Countries](https://restcountries.com/) | API de países del mundo |

---

## 📁 Estructura del proyecto

```
/
├── components/
│   ├── Header.jsx          # Barra de navegación (visible en todas las páginas)
│   └── Footer.jsx          # Pie de página (visible en todas las páginas)
├── pages/
│   ├── index.jsx           # Página 1 – Inicio (Home)
│   └── funcionalidad.jsx   # Página 2 – Funcionalidad principal
├── styles/
│   └── globals.css         # Solo importa Tailwind (sin CSS personalizado)
└── README.md
```

---

## 📄 Páginas

### 🏠 Página 1 – Inicio (`/`)
- Nombre del proyecto
- Descripción de la aplicación
- Problema que resuelve
- Integrantes del grupo

### ⚙️ Página 2 – Funcionalidad (`/funcionalidad`)
- Consumo de API (JSONPlaceholder / REST Countries)
- Renderizado dinámico de datos con tarjetas
- Filtros interactivos
- Estados de carga y error

---

## 🧩 Componentes

### `Header`
Barra de navegación fija con enlaces entre páginas usando el componente `Link` de Next.js. Visible en toda la aplicación.

### `Footer`
Pie de página con información del proyecto y los integrantes. Visible en toda la aplicación.

---

## 🌐 APIs consumidas

### JSONPlaceholder – Usuarios
```
GET https://jsonplaceholder.typicode.com/users
```
Muestra tarjetas con nombre, email y ciudad de cada usuario.

### REST Countries
```
GET https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,latlng
```
Muestra tarjetas de países con bandera, nombre y capital. Incluye buscador por nombre.

---

## ⚛️ Conceptos de React aplicados

- **`useState`** – Manejo de estado local (datos, filtros, loading)
- **`useEffect`** – Consumo de APIs al montar los componentes
- **`fetch`** – Peticiones HTTP a las APIs
- **`Link`** – Navegación entre páginas sin recarga
- **Componentes reutilizables** – `Header` y `Footer` compartidos entre páginas

---

## ▶️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/worldexplorer-app.git
cd worldexplorer-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
```
http://localhost:3000
```

---

## 👥 Integrantes del grupo

| Nombre | GitHub |
|--------|--------|
| Sebastian Villa | [@sebastianvilla](https://github.com/sebastianvilla) |
| Alejandro Peña | [@alejandropena](https://github.com/alejandropena) |
| Samuel Espinosa | [@samuelespinosa](https://github.com/samuelespinosa) |

> ⚠️ Cada integrante debe tener mínimo **3 commits** en el repositorio.

---

## 📌 Reglas del proyecto

- ✅ No se usa CSS tradicional (`styles.css`)
- ✅ No se usa Bootstrap ni otros frameworks de CSS
- ✅ Todas las clases de estilos son de **TailwindCSS**
- ✅ Mínimo 2 páginas con navegación funcional
- ✅ Header y Footer reutilizables en todas las páginas
- ✅ Consumo de API con `useEffect` y `fetch`
- ✅ Manejo de estado `loading` y `data`

---

## 📦 Entregables

- [x] Repositorio público en GitHub
- [x] Código funcional con Next.js
- [x] README del proyecto
- [x] Mínimo 3 commits por integrante

---

*Evento Evaluativo 3 – Desarrollo Web | 2025*