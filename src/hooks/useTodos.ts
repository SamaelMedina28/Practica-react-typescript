import { useEffect, useState } from "react";
import type { Task } from "../interfaces/task";
import Swal from "sweetalert2";
export const useTodos = () => {
  //Al principio la variable de estado 'todos' es un array de objetos 'Task'
  const [todos, setTodos] = useState<Task[]>(() => {
    const tareasGuardadas = localStorage.getItem("todos");
    //? Si hay tareas guardadas, las parsea y las retorna, si no, retorna un array vacio
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  //? Cada que haya un cambio en el estado de la variable 'todos', se guardan la informacion en el localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //? Añadir tarea
  const addTodo = (text: string) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
    Swal.fire({
      title: "¡Añadida!",
      text: "La tarea ha sido añadida.",
      icon: "success",
      showConfirmButton: false,
      timer: 1300,
    });
  };

  //? Eliminar tarea
  const deleteTodo = (id: number) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar esta tarea?",
      text: "No se podra recuperar la tarea",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, eliminarla!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    });
  };

  //? Marcar tarea como completada
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};
