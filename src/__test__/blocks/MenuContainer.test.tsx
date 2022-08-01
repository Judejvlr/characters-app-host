import { screen } from "@testing-library/react";
import MenuContainer from "../../components/blocks/MenuContainer";
import { render } from "../../utils/test-util";


test(('MenuContainer render properly'), () => {
  render(<MenuContainer>
    <p>Test</p>
  </MenuContainer>)
  expect(screen.getByTestId('menu-container')).toHaveStyle(`
  display: grid;
  flex-wrap: wrap;
  background-color: beige;
  height: calc(100vh - 3rem);
  `)
})
