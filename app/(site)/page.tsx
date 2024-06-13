"use client";
import Link from "next/link";
import TodoContainer from "./components/ToddoContainer";

export default function Home() {
  const testFunc = () => {
    console.log("testFunc", process.env.NEXT_PUBLIC_CLIENT_URL);
  };
  return (
    <div>
      <TodoContainer />
    </div>
  );
}
