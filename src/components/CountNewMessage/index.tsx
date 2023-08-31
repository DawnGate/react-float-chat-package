import React from "react";
import borderRadius from "src/system-design/borderRadius";
import colors from "src/system-design/colors";
import typography from "src/system-design/typography";
import { styled } from "styled-components";

interface ICountMessageProps {
  count: number;
}

const StyledCountNewMessage = styled.span`
  height: 16px;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  border-radius: ${borderRadius.full};
  ${typography.caption}
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.red[500]};
  padding: 0 4px;
`;

function CountNewMessage(props: ICountMessageProps) {
  const { count } = props;
  if (!count) {
    return null;
  }
  return <StyledCountNewMessage>+{count > 99 ? 99 : count}</StyledCountNewMessage>;
}

export default CountNewMessage;
