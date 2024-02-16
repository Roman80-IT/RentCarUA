import { styled } from "styled-components";
import theme from "components/themeJSX";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.secondaryBlue_4};
  color: ${theme.colors.uaYellow};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 12px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 42px;
  }
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;
