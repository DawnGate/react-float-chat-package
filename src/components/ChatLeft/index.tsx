import React from "react";
import styled from "styled-components";

import borderRadius from "src/system-design/borderRadius";
import boxShadows from "src/system-design/boxShadow";
import colors from "src/system-design/colors";

import ChatLeftHeader from "./ChatLeftHeader";

const ChatLeftWrapper = styled.div`
  position: fixed;
  bottom: 2px;
  right: 28px;

  width: 420px;
  height: 750px;
  max-height: calc(100vh - 64px);

  overflow: hidden;

  background: ${colors.white};

  border-radius: ${borderRadius["2lg"]};
  border: 1px solid;
  border-color: ${colors.gray[400]};

  box-shadow: ${boxShadows.card2};
`;

function ChatLeft() {
  return (
    <ChatLeftWrapper>
      <ChatLeftHeader />
      <div>
        <p>Hello</p>
      </div>
    </ChatLeftWrapper>
  );
}

export default ChatLeft;
