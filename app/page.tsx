"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col gap-3 justify-center items-center h-[100vh]">
      <Link
        href={"/login"}
        className="flex px-4 py-2 bg-gradient-to-r from-[#425cd9] via-[#2843ce] to-[#0827bf] text-white rounded-sm hover:bg-gradient-to-r hover:from-[#425bd9e1] hover:via-[#2844cee4] hover:to-[#0827bfe8]">
        Login
      </Link>
      <Link
        href={"/register"}
        className="flex px-4 py-2 bg-gradient-to-r from-[#425cd9] via-[#2843ce] to-[#0827bf] text-white rounded-sm hover:bg-gradient-to-r hover:from-[#425bd9e1] hover:via-[#2844cee4] hover:to-[#0827bfe8]">
        Register
      </Link>
    </main>
  );
}
