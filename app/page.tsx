import Login from "./components/dynamicForm/Login";
import Register from "./components/dynamicForm/Register";
import Form from "./components/Form";
import Quotes from "./components/Quotes/Quotes";

export default function Home() {
  if (typeof global !== "undefined") {
    console.log("Server-Side");
  }
  return (
    <main>
      <div>
        <Login />
        <Register />
      </div>
      {/* <Dummy /> */}
    </main>
  );
}
