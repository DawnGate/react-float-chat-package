import React from "react";

import { styled } from "styled-components";

import { TabType } from "src/constants/tab";

import Tab from "./Tab";

const Wrapper = styled.div`
  display: flex;
  padding: 0 24px;
  overflow-x: hidden;
  height: 32px;
  alight-items: center;
  justify-content: space-between;
`;

function Tabs() {
  return (
    <Wrapper>
      <Tab active title="Community" value={TabType.COMMUNITY} />
      <Tab title="Friends" value={TabType.FRIENDS} />
      <Tab title="Classes" value={TabType.CLASSES} />
    </Wrapper>
  );
}

export default Tabs;
