import React from "react";
import Layout from "../../components/Layout/Layout";
import AddTodo from "../../components/ToDo/AddTodo";
import TodoList from "../../components/ToDo/TodoList";
import VisibilityFilters from "../../components/ToDo/VisibilityFilters";

const Home = () => {
  return (
    <Layout>
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </Layout>
  );
};
export default Home;
