import { getProfileById } from "@/actions/auth/user.action";
import { permanentRedirect } from "next/navigation";
import React from "react";
import TodoContainer from "./components/ToddoContainer";

interface SharePageProps {
  params: { user_id: string };
}

const SharePage = async ({ params }: SharePageProps) => {
  const userId = params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });
  const userName = profile?.full_name;

  if (!profile) {
    permanentRedirect("/");
  }
  return (
    <div>
      <TodoContainer ownerUserId={userId} />
    </div>
  );
};

export default SharePage;
