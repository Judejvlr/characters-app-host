import styled from "styled-components";

interface HeaderProps {
  justifyItems: string,
  children: JSX.Element | JSX.Element[]
}

const StyledHeader = styled.header<{ justifyItems: string }>`
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => props.justifyItems};
  background-color: ${props => props.theme.palette.background.light};
  height: 3rem;
  width: 100vw;
  position:fixed;
  padding: 0.25rem 1.25rem;
  z-index: 1;
`

export default function Header({ justifyItems, children }: HeaderProps) {
  return <StyledHeader justifyItems={justifyItems}>
    {children}
  </StyledHeader>
}