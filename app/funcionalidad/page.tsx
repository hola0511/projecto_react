"use client";
import { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

type FilterType = "all" | "completed" | "pending";

export default function Funcionalidad() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        // Timeout de 5 segundos
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        let res: Response;

        try {
          res = await fetch("https://jsonplaceholder.typicode.com/todos", {
            signal: controller.signal,
          });
          clearTimeout(timeout);
        } catch (fetchErr) {
          clearTimeout(timeout);
          if (fetchErr instanceof DOMException && fetchErr.name === "AbortError") {
            throw new Error("La solicitud tardó demasiado. Verifica tu conexión.");
          }
          throw new Error("No se pudo conectar al servidor. Verifica tu internet.");
        }

        // Errores HTTP
        if (res.status === 404) throw new Error("Recurso no encontrado (404).");
        if (res.status === 401) throw new Error("No autorizado (401).");
        if (res.status === 403) throw new Error("Acceso prohibido (403).");
        if (res.status === 500) throw new Error("Error interno del servidor (500).");
        if (!res.ok) throw new Error(`Error inesperado: ${res.status} ${res.statusText}`);

        // Validar que sea JSON válido
        let data: unknown;
        try {
          data = await res.json();
        } catch {
          throw new Error("La respuesta del servidor no es válida.");
        }

        // Validar que sea un array
        if (!Array.isArray(data)) {
          throw new Error("El formato de los datos recibidos es incorrecto.");
        }

        setTodos((data as Todo[]).slice(0, 5));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Ocurrió un error desconocido.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [retryCount]); // retryCount dispara un nuevo fetch al reintentar

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  if (error) {
    return (
      <div className="error-container">
        <p>⚠️ {error}</p>
        <button onClick={() => setRetryCount(c => c + 1)}>
          Reintentar {retryCount > 0 && `(${retryCount})`}
        </button>
      </div>
    );
  }

  return (
    <TodoList
      todos={filteredTodos}
      filter={filter}
      setFilter={setFilter}
      loading={loading}
    />
  );
}