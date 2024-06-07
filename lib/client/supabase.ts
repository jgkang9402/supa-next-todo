import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";

export const createSupabaseBrowserClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // 확실히있다고 !를 붙이는것 하단에서한 타입단언과 비슷함
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
