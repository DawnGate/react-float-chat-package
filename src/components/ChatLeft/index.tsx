import React from "react";
import useChatStore from "src/stores/global";

import styled from "styled-components";

import borderRadius from "src/system-design/borderRadius";
import boxShadows from "src/system-design/boxShadow";
import colors from "src/system-design/colors";

import ChatLeftHeader from "./ChatLeftHeader";
import Tabs from "../Tabs";
import SearchBox from "../SearchBox";

interface IStyledChatLeftWrapper {
  $isOpen: boolean;
}

const ChatLeftWrapper = styled.div<IStyledChatLeftWrapper>`
  position: fixed;
  bottom: 24px;
  right: 28px;

  width: 0;
  height: 0;
  max-height: calc(100vh - 64px);
  border-radius: ${borderRadius.full};

  overflow: hidden;

  background: ${colors.white};

  border: 1px solid;
  border-color: ${colors.gray[400]};

  box-shadow: ${boxShadows.card2};

  opacity: 0;
  transition: all 0.3s ease-out;

  ${(props) =>
    props.$isOpen && `opacity: 1;bottom: 2px;width: 420px;height: 750px;border-radius: ${borderRadius["2lg"]};`}
`;

function ChatLeft() {
  const isOpenChat = useChatStore((state) => state.open);
  return (
    <ChatLeftWrapper $isOpen={isOpenChat}>
      <ChatLeftHeader />
      <Tabs />
      <SearchBox />
      <div>
        <p>Hello</p>
      </div>
    </ChatLeftWrapper>
  );
}

export default ChatLeft;
