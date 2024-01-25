import {
  AddTodo,
  Todo,
  TodosContext,
  TodosContextType,
  UpdateTodo,
} from "@contexts/TodosContext";
import { useEffect, useState } from "react";

const TodoProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const initialTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]",
    );
    setTodos(initialTodos);
  }, []);

  /**
   * @description Adds a new todo task to the todos list.
   * @param {string} task - The task to be added as a todo.
   * @return {void}
   */
  const addTodo: AddTodo = (task: string) => {
    setTodos((prevTodos: Todo[]): Todo[] => {
      // Create new todo
      const newTodo: Todo = {
        id: Math.random().toString(),
        task,
        completed: false,
        createdAt: Date.now(),
      };
      const updatedTodos: Todo[] = [newTodo, ...prevTodos];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  /**
   * @description Toggles the completion status of a todo item.
   * @param {string} id - The ID of the todo item to toggle
   * @return {void}
   */
  const toggleTodo: UpdateTodo = (id: string) => {
    setTodos((prevTodos: Todo[]): Todo[] => {
      const updatedTodos = prevTodos.map((todo: Todo): Todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  /**
   * @description Deletes a todo with the given id from the todos list.
   * @param {string} id - The id of the todo to be deleted
   * @return {void}
   */
  const deleteTodo: UpdateTodo = (id: string) => {
    setTodos((prevTodos: Todo[]): Todo[] => {
      const updatedTodos = prevTodos.filter(
        (todo: Todo): boolean => todo.id !== id,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const value: TodosContextType = { todos, addTodo, toggleTodo, deleteTodo };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export default TodoProvider;
