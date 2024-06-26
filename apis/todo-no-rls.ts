"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// todolist 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls") // todos_no_rls 테이블에서
    .select("*") // 모든 컬럼 가져오기
    .is("deleted_at", null) // deleted_at이 null인것만 가져오기
    .order("id", { ascending: false }); //id 기준으로 내림차순 정렬;
  return result.data;
};

// todoList 가져오기 by id
export const getTodoById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id); // id가 일치하는 것만 가져오기
  return result.data;
};

// todoList 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`) // content안에 terms 포함된 것만 가져오기 (대소문자 구분 없음)
    .order("id", { ascending: false })
    .limit(500); // 500개까지만 가져오기
  return result.data;
};

// todoList 생성
export const createTodo = async (content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .insert([{ content }]) // content만 넣어주기
    .select(); // 결과값 반환
  return result.data;
};

// todoList 수정
export const updateTodo = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({ content, updated_at: new Date().toISOString() }) // content만 수정
    .eq("id", id) // id가 일치하는 것만 수정
    .select(); // 결과값 반환
  return result.data;
};

// todoList 삭제(soft delete)
export const deleteTodo = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({ deleted_at: new Date().toISOString() }) // deleted_at에 현재시간 넣어주기
    .eq("id", id) // id가 일치하는 것만 삭제
    .select(); // 결과값 반환
  return result.data;
};

// todoList 삭제(hard delete)
export const deleteTodoHard = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .delete() // 삭제
    .eq("id", id) // id가 일치하는 것만 삭제
    .select(); // 결과값 반환
  return result.data;
};
