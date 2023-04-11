import "./App.scss";
import TodoList from "./components/TodoList/TodoList";
import ColorBox from "./components/colorbox";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0 ) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);


  }
  return (
    <div className="App">
      <h1>Hello moi nguoi</h1>
      <ColorBox />
      <br />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
