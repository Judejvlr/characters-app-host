import styled from 'styled-components'


const Button = styled.button`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: smaller;
  font-weight: bold;
  margin: 0.25rem;
  border: 1px solid transparent;
  color: ${props => props.theme.palette.text.dark};
  background-color:  ${props => props.theme.palette.background.light};
  border-color: #ccc;
  border-radius: 5px;
  &:hover{
    cursor: pointer;
    color: ${props => props.theme.palette.text.light};
    background-color:  ${props => props.theme.palette.background.dark};
  }
`

export default Button