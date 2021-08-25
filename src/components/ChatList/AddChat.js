import React from "react";
import { useDispatch } from "react-redux";
import { addChatWithFB } from "../../store/chats/actions";
import { useInput } from "../../utils/useInput";
import "../ChatList/ChatList.css"

export const AddChat = ({ onAddChat }) => {
  const dispatch = useDispatch();

  const { value, handleChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    dispatch(addChatWithFB(value));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  class="input" onChange={handleChange} value={value} />
    </form>
  );
};
