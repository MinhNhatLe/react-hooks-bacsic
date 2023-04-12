import "./App.scss";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import ColorBox from "./components/colorbox";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);


  // Lấy giá trị formValues lên để submit
  function handleTodoFormSubmit(formValues) {
    
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    // Cập nhật (push) dữ liệu vào state todoList để nó render todoList mới
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Hello moi nguoi</h1>
      <ColorBox />
      <br />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
