import { createContext, useContext } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: number;
};
export type AddTodo = (task: string) => void;
export type UpdateTodo = (id: string) => void;
export type TodosContextType = {
  todos: Todo[];
  addTodo: AddTodo;
  toggleTodo: UpdateTodo;
  deleteTodo: UpdateTodo;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
});
/**
 * Returns the TodosContextType from the useContext hook, or throws an error if used outside of Provider.
 *
 * @return {TodosContextType} The TodosContextType value obtained from the useContext hook.
 */
export const useTodos = (): TodosContextType => {
  const todosContext: TodosContextType | null = useContext(TodosContext);
  if (!todosContext) throw new Error("UseTodos used outside of Provider.");
  return todosContext;
};
