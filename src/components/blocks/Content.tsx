import styled from "styled-components";

interface AppBodyProps {
  children: JSX.Element | JSX.Element[]
}

const StyledAppBody = styled.div`
  width: 100vw;
  padding-top: 3rem; 
`

export default function Content({ children }: AppBodyProps) {
  return <StyledAppBody data-testid="app-body">
    {children}
  </StyledAppBody>
}