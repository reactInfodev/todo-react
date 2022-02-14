import React from "react";
import Body from "./Body";
import Header from "./Header";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <section className="content">
        <Header />
        <Body />
      </section>
    </div>
  );
};

export default TodoApp;
