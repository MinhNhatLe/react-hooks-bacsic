import "./App.scss";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import ColorBox from "./components/colorbox";
import React, { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);

  // Không có dependencies [] thì nó chạy má ơi luôn
  // Lấy API có dependencies[] thì chỉ chạy 1 lần
  // Nếu dependencies giữ nguyên kh thay đổi còn nó thay đổi thì chạy lại 1 lần
  
  // Lấy API có dependencies [] chạy 1 lần
  useEffect(() =>{
    async function  fetchPostList(){
    try {
        const fectchUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(fectchUrl);
        const responseJSON = await response.json();
        console.log({responseJSON});

        const {data} = responseJSON;
        setPostList(data);
    } catch (error) {
      console.log("Failed to fectch posts: ", error);
    }
  } fetchPostList();
  }, []);


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

      <br/>
      <PostList posts={postList}/>
    </div>
  );
}

export default App;
