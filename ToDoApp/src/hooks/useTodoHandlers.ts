import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { TodoType } from "../types/Todo.types";

export const useHandleCreation = () => {
  const [todos, setTodos] = useLocalStorage<TodoType[] | []>("todos", []);
  const [createdTodo, setCreatedTodo] = useState<Partial<TodoType>>({});

  useEffect(() => {
    setCreatedTodo((prev) => ({
      ...prev,
      id: `${Date.now().toString(36)}-${createdTodo.name}`,
    }));
  }, [createdTodo.name]);

  const handleCreation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!createdTodo) return;

    setTodos([...todos, createdTodo as TodoType]);
  };

  return [setCreatedTodo, handleCreation] as const;
};

export const useHandleEdition = (todo: TodoType) => {
  const [todos, setTodos] = useLocalStorage<TodoType[] | []>("todos", []);
  const [editedTodo, setEditedTodo] = useState<Partial<TodoType>>({
    name: todo.name || "",
    priority: todo.priority || "",
    id: todo.id || "",
  });

  useEffect(() => {
    setEditedTodo({
      name: todo.name || "",
      priority: todo.priority || "",
      id: todo.id || "",
    });
  }, [todo]);

  const handleEdition = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedTodo) return;

    const todoIndex = todos.findIndex((t: TodoType) => {
      return t.id === todo.id;
    });
    if (todoIndex === -1) throw new Error("Task Not Found");

    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = editedTodo as TodoType;

    setTodos(updatedTodos);
  };

  return [editedTodo, setEditedTodo, handleEdition] as const;
};

export const useHandleDeletion = (todo: TodoType) => {
  const [todos, setTodos] = useLocalStorage<TodoType[] | []>("todos", []);

  const handleDeletion = () => {
    const todoIndex = todos.findIndex((t: TodoType) => {
      return t.id === todo.id;
    });
    if (todoIndex === -1) throw new Error("Task Not Found");

    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 2);

    setTodos(updatedTodos);
  };

  return handleDeletion;
};
