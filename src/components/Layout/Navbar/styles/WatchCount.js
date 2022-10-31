import styled from "styled-components";

const WatchCount = styled.span`
  height: 30px;
  width: 30px;
  background-color: ${(p) => p.theme.colors.summerOrange};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
`;

export default WatchCount;
