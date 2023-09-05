import React from "react";

import styled from "styled-components";

import FloatButton from "../FloatButton";
import ChatLeft from "../ChatLeft";
import Global from "../styles/global";
import { media } from "../styles/mediaQuery";

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
