import React from "react";
import { ChatProps } from "./Chat.types";
import styled from "styled-components";

const Chat = ({ type }: ChatProps) => {
  return (
    <Wrapper>
      <div>
        <p>This is a chat</p>
        <p>type: {type}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background: red;
`;

export default Chat;
