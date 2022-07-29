import styled from 'styled-components'


const Button = styled.button<{ width?: string, center?: boolean }>`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: smaller;
  font-weight: bold;
  margin: 0.25rem;
  border: 1px solid transparent;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  border-radius: 5px;
  width: ${props => props.width};
  margin: ${props => props.center ? '0 auto' : ''};
  &:hover{
    cursor: pointer;
  }
`

export default Button