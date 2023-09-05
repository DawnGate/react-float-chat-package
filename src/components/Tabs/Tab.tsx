import React from "react";
import colors from "src/system-design/colors";
import typography from "src/system-design/typography";
import { styled } from "styled-components";

import { TabType } from "src/constants/tab";

interface ITabProps {
  active?: boolean;
  title: string;
  value: TabType;
}

interface ITabPropsWrapper {
  active?: boolean;
}

const Wrapper = styled.button<ITabPropsWrapper>`
  padding: 7px 24px;
  height: 30px;
  border: none;
  border-bottom: solid 2px ${(props) => (props.active ? colors.purple[400] : colors.white)};
  background: transparent;
  cursor: pointer;
`;

const WrapperText = styled.p<ITabPropsWrapper>`
  ${typography.caption}
  color: ${(props) => (props.active ? colors.purple[400] : colors.gray[900])};
  font-weight: ${(props) => (props.active ? 700 : 400)};
`;

function Tab({ active = false, title, value }: ITabProps) {
  return (
    <Wrapper
      active={active}
      onClick={() => {
        console.log(value);
      }}
    >
      <WrapperText active={active}>{title}</WrapperText>
    </Wrapper>
  );
}

export default Tab;
