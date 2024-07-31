"use client";
import useFetch from "./components/customHook/useFetch";
import Form from "./components/Form";
import Quotes from "./components/Quotes/Quotes";
import Index from "./components/customHook";

export default function Home() {
  const { data, loading, error }: any = useFetch(
    "https://dummyjson.com/recipes"
  );
  return (
    <main>
      <div>
        <Index />
      </div>
    </main>
  );
}
