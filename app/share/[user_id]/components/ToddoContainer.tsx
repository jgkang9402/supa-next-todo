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
  } = useTodosController(ownerUserId);

  return (
    <div>
      <TodoList
        ownerUserId={ownerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly
        onUpdate={onUpdateTodo}
        onCreate={onCreateEmptyTodo}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
