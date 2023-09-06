import React from "react";
import borderRadius from "src/system-design/borderRadius";
import colors from "src/system-design/colors";

import { styled } from "styled-components";

import searchIcon from "../../assets/icons/search.svg";

import Icon from "../Icon";

const Wrapper = styled.div`
  height: 56px;
  padding: 8px 16px;
`;

const WrapperSearchContent = styled.div`
  height: 100%;

  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: ${colors.overlay[100]};

  border-radius: ${borderRadius.full};
  border: 1px solid ${colors.overlay[100]};
`;

function SearchBox() {
  return (
    <Wrapper>
      <WrapperSearchContent>
        <Icon src={searchIcon} alt="search-icon" size={24} />
        <div>Search</div>
      </WrapperSearchContent>
    </Wrapper>
  );
}

export default SearchBox;
