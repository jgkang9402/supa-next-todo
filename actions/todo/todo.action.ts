"use server";

import { createServerSideClient } from "@/lib/supabase";

export const getTodoAction = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_no_rls") // todos_no_rls 테이블에서
    .select("*") // 모든 컬럼 가져오기
    .is("deleted_at", null) // deleted_at이 null인것만 가져오기
    .order("id", { ascending: false }); //id 기준으로 내림차순 정렬;
  console.log("todo GET API income", result);

  return result.data;
};
