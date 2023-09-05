import React from "react";
import useChatStore from "src/stores/global";

import styled from "styled-components";

import FloatButton from "../FloatButton";
import ChatLeft from "../ChatLeft";
import Global from "../styles/global";

const Wrapper = styled.div`
  font-family: inherit;
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
