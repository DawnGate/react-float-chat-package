import React from "react";

import styled from "styled-components";

import { media } from "src/styles/mediaQuery";
import Global from "src/styles/global";

import FloatButton from "../FloatButton";
import ChatLeft from "../ChatLeft";

const Wrapper = styled.div`
  display: none;
  ${media.laptop} {
    display: block;
  }
`;

function Chat() {
  return (
    <Wrapper>
      <Global />
      <ChatLeft />
      <FloatButton />
    </Wrapper>
  );
}

export default Chat;
