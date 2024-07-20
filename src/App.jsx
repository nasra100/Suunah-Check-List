import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { TodoProvider } from "./context/TodoProvider"; // Correctly import TodoProvider

function App() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  return (
    <TodoProvider> {/* Use TodoProvider here */}
      <div className="max-w-lg mx-auto mt-8 background">
        <h1 className="text-5xl text-blue-900 font-bold text-center mb-4">SUNNAH CHECKLIST</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
