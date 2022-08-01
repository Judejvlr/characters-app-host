
import styled from 'styled-components'

interface MenuButtonProps {
  text: string,
  onClick: () => void,
  image: string
}

const OptionButton = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  font-size: x-large;
  margin: 0.25rem;
  border: 2px solid ${props => props.theme.palette.background.dark};
  color: ${props => props.theme.palette.text.light};
  background-color:${props => props.theme.palette.background.dark};
  border-radius: 5px;
  &:hover{
    cursor: pointer;
  }
  @media (max-width: 600px){
      border-width: 2px;
      font-size: medium;
  }
`

const OptionBackground = styled.div<{ image: string }>`
background-image: url(${props => props.image});
background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    visibility: hidden ;
  }
  &:hover{
    filter: grayscale(1);
    button{
      visibility: visible;
    };
  }
  @media (max-width: 600px){
    button{
      visibility: visible;
    }
  }
`

function MenuButton({ text, onClick, image }: MenuButtonProps) {
  return (
    <OptionBackground image={image}>
      <OptionButton onClick={onClick}>
        {text}
      </OptionButton>
    </OptionBackground>
  )
}


export default MenuButton

