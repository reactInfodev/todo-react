import React from "react";
import { MdOutlineDelete, MdModeEditOutline, MdOutlineCheck } from "react-icons/md";

const ListItem = (props) => {
  const { title, description, completed } = props;
  return (
    <li>
      <div>
        <h6 className={`title ${completed ? "completed" : ""}`}>
          {title}
          <span className="ml-2 badge badge-info">Low</span>
        </h6>
        <p className="description">{description}</p>
      </div>
      <div>
        <button className="btn btn-success m-1">
          <MdOutlineCheck />
        </button>
        <button className="btn btn-warning m-1">
          <MdModeEditOutline />
        </button>
        <button className="btn btn-danger">
          <MdOutlineDelete />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
