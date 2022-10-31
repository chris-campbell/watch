import styled from "styled-components";

const DropdownMenu = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 0;
  background-color: #1d1d1d;
  min-width: 130px;
  box-shadow: 10px 9px 27px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 9px 27px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 9px 27px -1px rgba(0, 0, 0, 0.75);
  z-index: 1;
  height: auto;
  border-radius: 0.5rem;
`;

export default DropdownMenu;
