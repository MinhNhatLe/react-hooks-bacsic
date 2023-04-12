import queryString from "query-string";
import "./App.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import ColorBox from "./components/colorbox";
import React, { useEffect, useState } from "react";
// import PostFiltersForm from "./components/PostFiltersForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  // Không có dependencies [] thì nó chạy má ơi luôn
  // Lấy API có dependencies[] thì chỉ chạy 1 lần
  // Nếu dependencies giữ nguyên kh thay đổi còn nó thay đổi thì chạy lại 1 lần
  
  // Lấy API có dependencies [] chạy 1 lần
  useEffect(() =>{
    async function  fetchPostList(){
    try {
      const paramsString = queryString.stringify(filters);
        const fectchUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(fectchUrl);
        const responseJSON = await response.json();
        console.log({responseJSON});

        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
    } catch (error) {
      console.log("Failed to fectch posts: ", error);
    }
  } fetchPostList();
  }, [filters]);

  function handlePageChange(newPage){
    console.log("New Page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }


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
      {/* <PostFiltersForm /> */}
      <PostList posts={postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>
    </div>
  );
}

export default App;
