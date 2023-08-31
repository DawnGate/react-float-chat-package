import { styled } from "styled-components";

interface IconProps {
  size: number;
  src: string;
  alt: string;
}

const Icon = styled.img<IconProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export default Icon;
