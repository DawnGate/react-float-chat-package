import React from "react";
import styled from "styled-components";

import colors from "src/system-design/colors";
import boxShadows from "src/system-design/boxShadow";
import borderRadius from "src/system-design/borderRadius";

import chatIcon from "../../assets/icons/chat.svg";
import Icon from "../Icon";
import CountNewMessage from "../CountNewMessage";

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: ${colors.purple[300]};
  box-shadow: ${boxShadows.normal};
  border-radius: ${borderRadius.full};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 24px;
  right: 28px;
`;

function FloatButton() {
  return (
    <StyledButton>
      <Icon src={chatIcon} alt="Chat icon" size={36} />
      <CountNewMessage count={18} />
    </StyledButton>
  );
}

export default FloatButton;