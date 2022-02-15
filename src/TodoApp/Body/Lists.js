import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import ListItem from "../../components/ListItem";
import Loader from "../../components/Loader";

const Lists = (props) => {
  const { todo, fetchTodoList, setEditData, loader } = props;

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://infodev-server.herokuapp.com/api/todos/${id}`);

    if (response?.data?.id) {
      fetchTodoList();
      toast("Deleted successfully");
    }
  };

  return (
    <div id="lecture-list">
      {loader ? (
        <div className="text-center p-5">
          <Loader />
        </div>
      ) : (
        <ul>
          {todo.map((item) => (
            <ListItem
              key={item._id}
              id={item._id}
              priority={item.priority}
              title={item.name}
              description={item.description}
              completed={item.completed}
              handleDelete={() => handleDelete(item._id)}
              handleEdit={() => setEditData(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Lists;
