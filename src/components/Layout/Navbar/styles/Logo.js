import styled from "styled-components";

export const Logo = styled.div`
  font-size: ${(p) => p.theme.fontSizes.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.snow};
`;

export default Logo;
