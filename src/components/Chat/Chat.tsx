import React from "react";
import useChatStore from "src/stores/global";

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
  const isOpenChat = useChatStore((state) => state.open);
  return (
    <Wrapper>
      <Global />
      {isOpenChat ? <ChatLeft /> : <FloatButton />}
    </Wrapper>
  );
}

export default Chat;
