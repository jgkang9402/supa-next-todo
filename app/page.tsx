"use client";
import Link from "next/link";

export default function Home() {
  const testFunc = () => {
    console.log("testFunc", process.env.NEXT_PUBLIC_CLIENT_URL);
  };
  return (
    <div className="flex flex-col">
      <Link href={"/todo-no-rls"}>todo-no-rls</Link>
      <Link href={"/todo"}>todo</Link>
      <Link href={"/auth"}>auth</Link>
      <button onClick={testFunc}>asd</button>
    </div>
  );
}
