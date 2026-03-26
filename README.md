# Mini App React — Evento Evaluativo 3

Aplicación web profesional desarrollada con **Next.js** y **TailwindCSS** que consume la API pública de JSONPlaceholder. Permite explorar usuarios, posts y tareas con navegación entre páginas, manejo de estado y renderizado dinámico.

---

## Stack tecnológico

- **Next.js 15** — Framework de React con enrutamiento basado en archivos
- **React 19** — Manejo de componentes, `useState` y `useEffect`
- **TailwindCSS** — Diseño responsivo (sin CSS tradicional ni Bootstrap)
- **JSONPlaceholder** — API REST pública para consumo de datos

---

## Estructura del proyecto

```
📦 proyecto/
├── app/
│   ├── layout.js              # Layout global con Header y Footer
│   ├── page.js                # Página 1 — Home
│   └── funcionalidad/
│       └── page.js            # Página 2 — Funcionalidad principal
├── components/
│   ├── Header.jsx             # Navegación global
│   └── Footer.jsx             # Pie de página global
├── tailwind.config.js
└── next.config.js
```

---

## Páginas

### `/` — Home
- Nombre y descripción del proyecto
- Problema que resuelve la aplicación
- Integrantes del grupo con links a GitHub
- Acceso directo a la funcionalidad

### `/funcionalidad` — Funcionalidad principal
- Consumo de la API de JSONPlaceholder
- Listado dinámico de usuarios, posts o tareas
- Filtros interactivos (ej. tareas completadas / pendientes)
- Manejo de estado con `useState` y carga de datos con `useEffect`

---

## Componentes

| Componente | Descripción |
|---|---|
| `Header` | Barra de navegación con `Link` de Next.js, visible en todas las páginas |
| `Footer` | Pie de página con info del proyecto, visible en todas las páginas |

---

## API — JSONPlaceholder

Base URL: `https://jsonplaceholder.typicode.com`

| Endpoint | Uso en la app |
|---|---|
| `/users` | Lista de usuarios con nombre, email y ciudad |
| `/posts` | Blog simple con título, contenido y autor |
| `/todos` | Tareas con filtro por estado (✔ completada / ✘ pendiente) |

---

## Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/SebasVZ17/<nombre-del-repo>.git
cd <nombre-del-repo>

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev
# → http://localhost:3000
```

---

## Requisitos del evaluativo ✔

- [x] Framework: Next.js
- [x] Estilos: TailwindCSS (sin CSS tradicional ni Bootstrap)
- [x] Mínimo 2 páginas con navegación (`Link`)
- [x] Componente `Header` reutilizable
- [x] Componente `Footer` reutilizable
- [x] Manejo de estado con `useState`
- [x] Efectos secundarios con `useEffect`
- [x] Consumo de API externa (JSONPlaceholder)
- [x] Renderizado dinámico de datos

---

## Integrantes

| Nombre | GitHub |
|---|---|
| Sebastian Villa | [@SebasVZ17](https://github.com/SebasVZ17) |
| Samuel Espinosa | [@hola0511](https://github.com/hola0511) |
| Alejandro Peña | [@alejop0927](https://github.com/alejop0927) |

---

> Evento Evaluativo 3 · Modalidad grupal · Valor: 15%