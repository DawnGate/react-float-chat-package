// src/styles/global.ts
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: inherit;
  }   

  .scrollbar-display::-webkit-scrollbar-thumb {
    background: rgba(179,179,179, .5);
    border-radius: 10px;
    border: 1px solid white;
  }

  .scrollbar-display::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
`;
