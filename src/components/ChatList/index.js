import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import  "../ChatList/ChatList.css"

export const ChatList = ({ chats }) => {
  return (
    <List>
      {Object.values(chats).map((c) => (
        <ListItem key={c.id}>
          <Link className="Item" to={`/home/${c.id}`}>{c.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
