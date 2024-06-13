"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
  ownerUserId?: string;
}

const TodoContainer = ({ ownerUserId }: TodoContainerProps) => {
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
        ownerUserId="test user"
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
