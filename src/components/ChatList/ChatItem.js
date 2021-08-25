import React from "react";
import { ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteChatWithFB } from "../../store/chats/actions";
import "../ChatList/ChatList.css"

export const ChatItem = ({ id, name, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteChatWithFB(id));
  };
  
  return (
    <ListItem>
      <Link className="chat" to={`/home/${id}`}>{name}</Link>
      <div onClick={handleDelete}>DELETE</div>
    </ListItem>
  );
};
