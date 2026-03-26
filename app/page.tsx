import Link from "next/link";

const integrantes = [
  {
    nombre: "Sebastian Villa",
    github: "https://github.com/SebasVZ17",
    usuario: "@SebasVZ17",
  },
  {
    nombre: "Samuel Espinosa",
    github: "https://github.com/hola0511",
    usuario: "@hola0511",
  },
  {
    nombre: "Alejandro Peña",
    github: "https://github.com/alejop0927",
    usuario: "@alejop0927",
  },
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Evento Evaluativo 3
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Mini App React con Next.js y TailwindCSS
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Aplicación web profesional desarrollada con Next.js y TailwindCSS
            que consume la API pública de JSONPlaceholder.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Problema que resuelve
            </h2>
            <p className="mt-3 text-slate-600 leading-7">
              Esta aplicación permite mostrar información de forma clara y
              organizada desde una API externa, facilitando la exploración de
              usuarios, publicaciones y tareas en una interfaz moderna.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/funcionalidad"
              className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Ir a la funcionalidad principal
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">
            Integrantes del grupo
          </h2>

          <div className="mt-6 space-y-4">
            {integrantes.map((integrante) => (
              <div
                key={integrante.nombre}
                className="rounded-xl border border-slate-200 p-4"
              >
                <h3 className="text-lg font-medium text-slate-800">
                  {integrante.nombre}
                </h3>
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {integrante.usuario}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}