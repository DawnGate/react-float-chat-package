import React from "react";
import useChatStore from "src/stores/global";

import { styled } from "styled-components";

import typography from "src/system-design/typography";
import borderRadius from "src/system-design/borderRadius";
import colors from "src/system-design/colors";

import topChatBarBackground from "../../assets/images/TopChatBar.png";
import closeIcon from "../../assets/icons/close.svg";

import Icon from "../Icon";
import IconButton from "../IconButton";

const Wrapper = styled.div`
  height: 56px;

  background-image: url(${topChatBarBackground});
  background-repeat: no-repeat;
  background-size: contain;
`;

const WrapperContent = styled.div`
  padding: 8px 14px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapperHeaderText = styled.p`
  ${typography.header}
`;

function ChatLeftHeader() {
  const toggleChat = useChatStore((state) => state.toggleChat);
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperHeaderText>Chat</WrapperHeaderText>
        <IconButton onClick={toggleChat} size={32}>
          <Icon src={closeIcon} alt="close-icon" size={16} />
        </IconButton>
      </WrapperContent>
    </Wrapper>
  );
}

export default ChatLeftHeader;
