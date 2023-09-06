import React from "react";
import { styled } from "styled-components";

import Item from "./Item";

const Wrapper = styled.div`
  overflow-x: auto;
  height: calc(100% - 56px - 32px - 56px);
`;

function ChatList() {
  return (
    <Wrapper>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
}

export default ChatList;
