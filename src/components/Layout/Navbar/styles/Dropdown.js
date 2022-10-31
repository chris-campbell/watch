import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownMenu} {
    visibility: visible;
    opacity: 1;
    transition: 500ms;
  }
`;

export default Dropdown;
