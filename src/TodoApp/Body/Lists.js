import React, { useEffect, useState } from "react";
import ListItem from "../../components/ListItem";
import axios from "axios";

const Lists = () => {
  const [todo, setTodo] = useState([]);

  const fetchTodoList = async () => {
    const response = await axios.get("https://infodev-server.herokuapp.com/api/todos");
    setTodo(response?.data || []);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div id="lecture-list">
      <ul>
        {todo.map((item) => (
          <ListItem
            key={item._id}
            title={item.name}
            description={item.description}
            completed={item.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default Lists;
