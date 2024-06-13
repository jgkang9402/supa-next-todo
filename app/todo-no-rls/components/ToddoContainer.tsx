"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onCreateEmptyTodo,
    onDeleteTodo,
    onSearchTodos,
    onUpdateTodo,
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName="test user"
        ownerUserId="123123"
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodo}
        onCreate={onCreateEmptyTodo}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
