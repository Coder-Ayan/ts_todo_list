"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "@contexts/TodosContext";

const AddTodo = () => {
  const [task, setTask] = useState<string>("");
  const { addTodo } = useTodos();
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (task.length > 0) addTodo(task);
    setTask("");
  };

  return (
    <form
      className="flex w-full flex-nowrap space-x-4 md:w-1/3"
      onSubmit={handleFormSubmit}
    >
      <Input
        size="sm"
        variant="bordered"
        type="text"
        placeholder="Enter your todo"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        maxLength={125}
      />
      <Button
        color="success"
        size="lg"
        variant="ghost"
        radius="sm"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
