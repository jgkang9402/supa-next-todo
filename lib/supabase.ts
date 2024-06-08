import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";
import { getCookie, setCookie } from "cookies-next"; // 쿠키조작을 위한 라이브러리
import { Database } from "@/types/supabase";
/* 
  // RouterHandler, RSC, Middleare, ServerActions
  // RSC는 쿠키조작 불가능함
  // RouterHandler,Middleware,ServerActions는 쿠키조작 가능 (방법은다다름)
*/

// - ServerActions, RouterHandler
export const createServerSideClient = async (serverComponent = false) => {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => cookieStore.get(key)?.value,
        set: (key, value, options) => {
          if (serverComponent) return; // 서버컴포넌트일때 쿠키조작 불가
          cookieStore.set(key, value, options);
        },
        remove: (key, options) => {
          if (serverComponent) return; // 서버컴포넌트일때 쿠키조작 불가
          cookieStore.set(key, "", options);
        },
      },
    }
  );
};

// - RSC
export const createServerSideClientRSC = async () => {
  return createServerSideClient(true);
};

// - Middleware
export const createServerSideMiddleware = async (
  req: NextRequest,
  res: NextResponse
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => getCookie(key, { req, res }),
        set: (key, value, options) => {
          setCookie(key, value, { req, res, ...options });
        },
        remove: (key, options) => {
          setCookie(key, "", { req, res, ...options });
        },
      },
    }
  );
};
