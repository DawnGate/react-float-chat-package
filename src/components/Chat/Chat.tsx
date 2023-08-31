import React from "react";

import styled from "styled-components";

import { ChatProps } from "./Chat.types";
import FloatButton from "../FloatButton";

const Wrapper = styled.div`
  padding: 8px;
  background: red;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap");
  font-family: "Montserrat", sans-serif;
`;

function Chat({ type }: ChatProps) {
  return (
    <Wrapper>
      <div>
        <p>This is a chat</p>
        <p>type: {type}</p>
        <FloatButton />
      </div>
    </Wrapper>
  );
}

export default Chat;
