import React from "react";

import styled from "styled-components";

import { ChatProps } from "./Chat.types";

const Wrapper = styled.div`
  padding: 8px;
  background: red;
`;

function Chat({ type }: ChatProps) {
  return (
    <Wrapper>
      <div>
        <p>This is a chat</p>
        <p>type: {type}</p>
      </div>
    </Wrapper>
  );
}

export default Chat;
