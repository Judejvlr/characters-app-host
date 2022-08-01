import styled from "styled-components";

interface MenuContainerProps {
  children: JSX.Element | JSX.Element[]
}

export const StyledContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  background-color: beige;
  height: calc(100vh - 3rem);
`

export default function MenuContainer({ children }: MenuContainerProps) {
  return <StyledContainer data-testid="menu-container">
    {children}
  </StyledContainer>
}