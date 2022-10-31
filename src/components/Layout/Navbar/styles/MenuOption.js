import styled from "styled-components";

const MenuOption = styled.li`
  list-style: none;
  padding: 0.7rem 1rem;
  color: ${(p) => p.theme.colors.snow};
  &:hover {
    background-color: #2b2b2b;
    transition: 400ms;
    color: #fff;
    cursor: pointer;
  }
`;

export default MenuOption;
