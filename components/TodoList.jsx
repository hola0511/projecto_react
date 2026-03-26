"use client";

export default function TodoList({ todos, filter, setFilter, loading }) {
  const filters = [
    { key: "all", label: "Todas" },
    { key: "completed", label: "Completadas" },
    { key: "pending", label: "Pendientes" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 px-4 py-12">
      {/* Título */}
      <div className="max-w-2xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
          Lista de Tareas
        </h1>
        <p className="text-zinc-400 text-sm">
          Gestioná tus tareas de forma rápida y visual
        </p>
      </div>

      {/* Botones de filtro */}
      <div className="max-w-2xl mx-auto flex gap-3 mb-8 justify-center">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 transform
              ${
                filter === key
                  ? "bg-white text-zinc-900 border-white shadow-lg scale-105"
                  : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white hover:scale-105"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="max-w-2xl mx-auto">
        {loading ? (
          <ul className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="h-14 rounded-xl bg-zinc-800/70 animate-pulse shadow-inner"
              />
            ))}
          </ul>
        ) : todos.length === 0 ? (
          <div className="text-center text-zinc-500 py-20 text-sm">
            No hay tareas para mostrar.
          </div>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-150
                  ${
                    todo.completed
                      ? "bg-emerald-950/30 border-emerald-800/40 hover:border-emerald-500/60 shadow-[0_0_10px_0_rgba(34,197,94,0.4)]"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-600 shadow-sm"
                  }`}
              >
                <span
                  className={`text-lg shrink-0 ${
                    todo.completed ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {todo.completed ? "✔" : "❌"}
                </span>

                <span className="text-xs text-zinc-600 font-mono shrink-0 w-6 text-right">
                  #{todo.id}
                </span>

                <span
                  className={`text-sm flex-1 capitalize ${
                    todo.completed
                      ? "text-zinc-400 line-through"
                      : "text-zinc-200"
                  }`}
                >
                  {todo.title}
                </span>

                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0
                  ${
                    todo.completed
                      ? "bg-emerald-900/60 text-emerald-400"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {todo.completed ? "Hecha" : "Pendiente"}
                </span>
              </li>
            ))}
          </ul>
        )}

        {!loading && (
          <p className="text-center text-zinc-500 text-xs mt-8">
            {todos.length} tarea{todos.length !== 1 ? "s" : ""} mostrada
            {todos.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>
    </main>
  );
}