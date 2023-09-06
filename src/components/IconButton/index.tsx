import React, { ReactElement } from "react";
import borderRadius from "src/system-design/borderRadius";
import colors from "src/system-design/colors";

import { styled } from "styled-components";

interface IconButtonProps {
  hoverColor?: string;
  children?: ReactElement;
  size?: number;
  onClick?: () => void;
}

interface WrapperProps {
  $size: number;
  $hoverColor: string;
}

const Wrapper = styled.button<WrapperProps>`
  height: ${(props) => props.$size}px;
  width: ${(props) => props.$size}px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  border-radius: ${borderRadius.full};

  background: transparent;
  &:hover {
    background: ${(props) => (props.onClick ? props.$hoverColor : "transparent")};
  }
`;

function IconButton({ hoverColor = colors.purple[100], children, size = 24, onClick }: IconButtonProps) {
  return (
    <Wrapper $size={size} $hoverColor={hoverColor} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

export default IconButton;
