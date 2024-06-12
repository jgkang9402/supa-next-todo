import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  console.log(">>>>searhParams", searchParams);
  console.log(">>>>origin", origin);
  const code = searchParams.get("code");
  const next = searchParams.get("next");

  if (code) {
    const supabase = await createServerSideClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) return NextResponse.redirect(origin);
    return NextResponse.redirect(`${origin}${next}`);
  }
  return NextResponse.redirect(origin);
}
