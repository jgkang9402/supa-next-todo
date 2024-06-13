import Link from "next/link";

const GNB = () => {
  return (
    <nav className="flex justify-between gap-2 mt-5">
      <Link href={"/"} className="border p-3">
        home
      </Link>
      <Link href={"/todo-no-rls"} className="border p-3">
        todo-no-rls
      </Link>
      <Link href={"/client-test"} className="border p-3">
        client-test
      </Link>
      <Link href={"/todo"} className="border p-3">
        todo
      </Link>
      <Link href={"/auth"} className="border p-3">
        auth
      </Link>
    </nav>
  );
};

export default GNB;
