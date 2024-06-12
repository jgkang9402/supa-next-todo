"use client";
import React, { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import useHydration from "@/hooks/useHydration";

const AuthUi = () => {
  const [user, setUser] = useState<any>(null);
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydration();

  const getUserInfo = async () => {
    const result = await supabase.auth.getUser();

    if (result?.data?.user) setUser(result.data.user);
  };
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // setUser(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          process.env.NEXT_PUBLIC_CLIENT_URL + "/auth/callback?next=/auth",
      },
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  if (!isMount) return null;
  return (
    <section>
      <div>{user ? `로그인 됨 ${user?.email}` : "로그아웃"}</div>
      <>
        {user && (
          <button onClick={handleLogout} className="border-2 border-black p-2">
            로그아웃
          </button>
        )}
      </>
      <div className="mx-auto max-w-[500px]">
        <Auth
          redirectTo={`${process.env.NEXT_PUBLIC_CLIENT_URL}/auth/callback?next=/auth`}
          // redirectTo={`${process.env.NEXT_PUBLIC_CLIENT_URL}/auth`}
          supabaseClient={supabase} // Supabase client
          appearance={{ theme: ThemeSupa }} // UI appearance
          onlyThirdPartyProviders // Only third-party providers
          providers={["github"]} // Only GitHub
        />
        <button className="border w-full p-4" onClick={handleGoogleLogin}>
          깃헙로그인 커스텀
        </button>
      </div>
    </section>
  );
};

export default AuthUi;
