import React from "react";
import borderRadius from "src/system-design/borderRadius";
import colors from "src/system-design/colors";

import { styled } from "styled-components";

import searchIcon from "../../assets/icons/search.svg";

import Icon from "../Icon";
import IconButton from "../IconButton";

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

const SearchInput = styled.input`
  flex: 1;
  padding-left: 2px;
  padding-right: 2px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 400;

  color: #707991;
  background: transparent;
  border: none;

  &:focus {
    box-shadow: 0 0 0 1px ${colors.overlay[100]};
    border-radius: ${borderRadius.md};
  }
`;

function SearchBox() {
  return (
    <Wrapper>
      <WrapperSearchContent>
        <IconButton size={24}>
          <Icon src={searchIcon} alt="search-icon" size={18} />
        </IconButton>
        <SearchInput placeholder="Search" />
      </WrapperSearchContent>
    </Wrapper>
  );
}

export default SearchBox;
