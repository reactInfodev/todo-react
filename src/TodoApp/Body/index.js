import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import Lists from "./Lists";

const Body = () => {
  const [todo, setTodo] = useState([]);
  const [editData, setEditData] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchTodoList = async () => {
    setLoader(true)
    const response = await axios.get("https://infodev-server.herokuapp.com/api/todos");
    setTodo(response?.data || []);
    setLoader(false)
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="lecture">
      <Form fetchTodoList={fetchTodoList} editData={editData} setEditData={setEditData} />
      <Lists todo={todo} fetchTodoList={fetchTodoList} setEditData={setEditData} loader={loader}/>
    </div>
  );
};

export default Body;
