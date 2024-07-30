import Login from "./components/dynamicForm/Login";
import Register from "./components/dynamicForm/Register";
import Form from "./components/Form";
import Quotes from "./components/Quotes/Quotes";

export default function Home() {
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
