"use client";

import { Todo, useTodos } from "@contexts/TodosContext";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

const Todos = ({ filter }: { filter?: string }) => {
  const { todos, toggleTodo, deleteTodo } = useTodos();
  let filteredTodos: Todo[] = todos;
  if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <div className="w-[80rem]">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => {
          return (
            <div
              className="flex h-20 items-center justify-between gap-5 border-x border-b px-10 py-4 first:rounded-t-xl first:border last:rounded-b-xl"
              key={todo.id}
            >
              <Checkbox
                radius="md"
                color="success"
                size="lg"
                className="[&>*:last-child]:ml-5"
                isSelected={todo.completed}
                lineThrough={true}
                onValueChange={() => toggleTodo(todo.id)}
              >
                {todo.task}
              </Checkbox>
              {todo.completed && (
                <Button
                  color="danger"
                  radius="sm"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              )}
            </div>
          );
        })
      ) : (
        <div className="text-center text-gray-400">
          No {filter} tasks to display.
        </div>
      )}
    </div>
  );
};

export default Todos;
