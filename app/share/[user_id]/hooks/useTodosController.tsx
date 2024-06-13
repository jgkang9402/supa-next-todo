import {
  createTodo,
  deleteTodo,
  getTodosByUserId,
  getTodos,
  getTodosBySearch,
  updateTodo,
} from "@/actions/todo/todo.action";
import { Database, Tables } from "@/types/supabase";
import React, { use, useCallback, useEffect, useState } from "react";

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const useTodosController = (userId = "") => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const onGetTodos = useCallback(async () => {
    setLoading(true);
    try {
      const resultTodos = await getTodosByUserId(userId);
      if (resultTodos) setTodos(resultTodos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [userId]);
  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  // 비어있는 todo 생성
  const onCreateEmptyTodo = async () => {
    await createTodo("");
    await onGetTodos();
  };

  // todo 업데이
  const onUpdateTodo = async (id: number, content: string) => {
    await updateTodo(id, content);
    await onGetTodos();
  };

  // todo 삭제
  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    await onGetTodos();
  };

  // todo검색
  const onSearchTodos = async (terms: string) => {
    if (!terms) {
      return onGetTodos();
    }
    setLoading(true);
    try {
      const resultTodos = await getTodosBySearch(terms);
      if (resultTodos) setTodos(resultTodos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    todos,
    onCreateEmptyTodo,
    onUpdateTodo,
    onDeleteTodo,
    onSearchTodos,
  };
};

export default useTodosController;
