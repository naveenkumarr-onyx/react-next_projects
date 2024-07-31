"use client";
import useFetch from "./components/customHook/useFetch";
import Login from "./components/dynamicForm/Login";
import Register from "./components/dynamicForm/Register";
import Form from "./components/Form";
import Quotes from "./components/Quotes/Quotes";

export default function Home() {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  console.log(data);
  return (
    <main>
      {loading ? <p>loading...</p> : ""}
      <div>
        <Login />
        <Register />
      </div>
      {/* <Dummy /> */}
    </main>
  );
}
