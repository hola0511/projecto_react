"use client";
import { useEffect, useState } from "react";
import TodoList from "../../components/TodoList";

export default function Funcionalidad() {
  // estados
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  // filtro
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  // render
  return (
    <TodoList
      todos={filteredTodos}
      filter={filter}
      setFilter={setFilter}
      loading={loading}
    />
  );
}