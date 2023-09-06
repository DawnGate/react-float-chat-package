import React from "react";
import colors from "src/system-design/colors";
import typography from "src/system-design/typography";
import { styled } from "styled-components";

import { TabType } from "src/constants/tab";
import useChatStore from "src/stores/global";

interface ITabProps {
  title: string;
  value: TabType;
}

interface ITabPropsWrapper {
  $isActive?: boolean;
}

const Wrapper = styled.button<ITabPropsWrapper>`
  padding: 7px 24px;
  height: 30px;
  border: none;
  border-bottom: solid 2px ${(props) => (props.$isActive ? colors.purple[400] : colors.white)};
  background: transparent;
  cursor: pointer;
`;

const WrapperText = styled.p<ITabPropsWrapper>`
  ${typography.caption}
  color: ${(props) => (props.$isActive ? colors.purple[400] : colors.gray[900])};
  font-weight: ${(props) => (props.$isActive ? 700 : 400)};
`;

function Tab({ title, value }: ITabProps) {
  const activatedTab = useChatStore((state) => state.activeTab);
  const handleChangeActiveTab = useChatStore((state) => state.changeActiveTab);
  const isActive = activatedTab === value;
  return (
    <Wrapper
      $isActive={isActive}
      onClick={() => {
        handleChangeActiveTab(value);
      }}
    >
      <WrapperText $isActive={isActive}>{title}</WrapperText>
    </Wrapper>
  );
}

export default Tab;
